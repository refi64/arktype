import type { writeUnboundableMessage } from "@ark/schema"
import type { array, ErrorMessage, typeToString } from "@ark/util"
import type { Comparator } from "../string/reduce/shared.ts"
import type {
	BoundExpressionKind,
	writeInvalidLimitMessage
} from "../string/shift/operator/bounds.ts"
import type { inferAstIn, InferredAst } from "./infer.ts"
import type { astToString } from "./utils.ts"
import type { validateAst } from "./validate.ts"

type InferredLimit = number | Date

export type validateRange<l, comparator extends Comparator, r, $, args> =
	l extends InferredAst<InferredLimit> ?
		validateBound<r, comparator, l, "left", $, args>
	: l extends [infer leftAst, Comparator, unknown] ?
		ErrorMessage<writeDoubleRightBoundMessage<astToString<leftAst>>>
	:	validateBound<
			l,
			comparator,
			r extends InferredAst<InferredLimit> ? r : never,
			"right",
			$,
			args
		>

export type validateBound<
	boundedAst,
	comparator extends Comparator,
	limitAst extends InferredAst<InferredLimit>,
	boundKind extends BoundExpressionKind,
	$,
	args
> =
	inferAstIn<boundedAst, $, args> extends infer bounded ?
		isNumericallyBoundable<bounded> extends true ?
			limitAst[0] extends number ?
				validateAst<boundedAst, $, args>
			:	ErrorMessage<
					writeInvalidLimitMessage<comparator, limitAst[2], boundKind>
				>
		: [bounded] extends [Date] ?
			// allow numeric or date literal as a Date limit
			validateAst<boundedAst, $, args>
		:	ErrorMessage<writeUnboundableMessage<typeToString<bounded>>>
	:	never

// Check each numerically boundable type individually so an expression comprised
// of mixed bound kinds like (string|number)<5 isn't allowed
type isNumericallyBoundable<bounded> =
	[bounded] extends [number] ? true
	: [bounded] extends [string] ? true
	: [bounded] extends [array] ? true
	: false

export const writeDoubleRightBoundMessage = <root extends string>(
	root: root
): writeDoubleRightBoundMessage<root> =>
	`Expression ${root} must have at most one right bound`

type writeDoubleRightBoundMessage<root extends string> =
	`Expression ${root} must have at most one right bound`
