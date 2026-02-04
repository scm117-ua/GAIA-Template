import * as React from "react"
import { Input } from "@/components/ui/input"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Label } from "@/components/ui/label"
import { AlloyAmount, UnitType } from "../schemas"
import { cn } from "@/lib/utils"

interface AmountInputProps {
    value: AlloyAmount
    onChange: (value: AlloyAmount) => void
    error?: string
    className?: string
}

export function AmountInput({ value, onChange, error, className }: AmountInputProps) {
    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFloat(e.target.value)
        // Handle NaN or empty string by passing 0 or keeping previous if desired, 
        // but for now strict number from input
        onChange({ ...value, value: isNaN(newValue) ? 0 : newValue })
    }

    const handleUnitChange = (unit: string) => {
        if (unit === "ingot" || unit === "unit") {
            onChange({ ...value, unit: unit as UnitType })
        }
    }

    return (
        <div className={cn("grid gap-2", className)}>
            <Label htmlFor="amount-input">Amount</Label>
            <div className="flex items-center gap-2">
                <Input
                    id="amount-input"
                    type="number"
                    min={0}
                    value={value.value || ""}
                    onChange={handleAmountChange}
                    className={cn("w-[180px]", error && "border-destructive focus-visible:ring-destructive")}
                    aria-invalid={!!error}
                    aria-describedby={error ? "amount-error" : undefined}
                />
                <ToggleGroup type="single" value={value.unit} onValueChange={handleUnitChange}>
                    <ToggleGroupItem value="unit" aria-label="Toggle Unit">
                        Units
                    </ToggleGroupItem>
                    <ToggleGroupItem value="ingot" aria-label="Toggle Ingot">
                        Ingots
                    </ToggleGroupItem>
                </ToggleGroup>
            </div>
            {error && (
                <p id="amount-error" className="text-sm font-medium text-destructive">
                    {error}
                </p>
            )}
        </div>
    )
}
