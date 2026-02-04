import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useAlloys } from '../api/getAlloys';

// [Feature: Alloy Selector] [Story: AC-PLAYER-002] [Ticket: AC-PLAYER-002-FE-T01]

interface AlloySelectProps {
    value: number | null;
    onSelect: (value: number) => void;
    className?: string; // Standard prop for extensions
}

export function AlloySelect({ value, onSelect, className }: AlloySelectProps) {
    const { data: alloys, isLoading, isError } = useAlloys();

    const handleValueChange = (val: string) => {
        onSelect(Number(val));
    };

    return (
        <div className={`space-y-2 ${className || ''}`}>
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Select Alloy
            </label>
            <Select
                value={value ? String(value) : undefined}
                onValueChange={handleValueChange}
                disabled={isLoading || isError}
            >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder={isLoading ? "Loading alloys..." : "Choose an alloy"} />
                </SelectTrigger>
                <SelectContent>
                    {alloys?.map((alloy) => (
                        <SelectItem key={alloy.id} value={String(alloy.id)}>
                            {alloy.name}
                        </SelectItem>
                    ))}
                    {isError && (
                        <div className="p-2 text-sm text-destructive">Failed to load alloys</div>
                    )}
                </SelectContent>
            </Select>
            {isError && (
                <p className="text-sm text-destructive font-medium">
                    Error loading alloys. Please try again.
                </p>
            )}
        </div>
    );
}
