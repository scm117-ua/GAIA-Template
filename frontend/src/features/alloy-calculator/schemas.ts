import { z } from "zod"

export const UnitTypeSchema = z.enum(["ingot", "unit"])
export type UnitType = z.infer<typeof UnitTypeSchema>

export const AlloyAmountSchema = z.object({
    value: z.number().min(0, "Amount must be positive"),
    unit: UnitTypeSchema,
})

export type AlloyAmount = z.infer<typeof AlloyAmountSchema>
