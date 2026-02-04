import { render, screen, fireEvent } from "@testing-library/react"
import { AmountInput } from "./AmountInput"
import { AlloyAmount } from "../schemas"
import { vi } from "vitest"

describe("AmountInput", () => {
    const defaultValue: AlloyAmount = { value: 100, unit: "unit" }
    const handleChange = vi.fn()

    it("renders with initial value", () => {
        render(<AmountInput value={defaultValue} onChange={handleChange} />)
        expect(screen.getByLabelText("Amount")).toHaveValue(100)
        expect(screen.getByLabelText("Toggle Unit")).toHaveAttribute("data-state", "on")
    })

    it("calls onChange when input changes", () => {
        render(<AmountInput value={defaultValue} onChange={handleChange} />)
        const input = screen.getByLabelText("Amount")
        fireEvent.change(input, { target: { value: "200" } })
        expect(handleChange).toHaveBeenCalledWith({ value: 200, unit: "unit" })
    })

    it("calls onChange when unit toggles", () => {
        render(<AmountInput value={defaultValue} onChange={handleChange} />)
        const ingotToggle = screen.getByLabelText("Toggle Ingot")
        fireEvent.click(ingotToggle)
        expect(handleChange).toHaveBeenCalledWith({ value: 100, unit: "ingot" })
    })

    it("displays error message", () => {
        render(<AmountInput value={defaultValue} onChange={handleChange} error="Invalid amount" />)
        expect(screen.getByText("Invalid amount")).toBeInTheDocument()
        expect(screen.getByLabelText("Amount")).toHaveAttribute("aria-invalid", "true")
    })
})
