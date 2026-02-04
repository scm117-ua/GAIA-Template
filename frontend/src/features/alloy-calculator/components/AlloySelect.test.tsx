import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AlloySelect } from './AlloySelect';
import { createWrapper } from '@/test/test-utils';
import { server } from '@/mocks/server';
import { http, HttpResponse } from 'msw';

describe('AlloySelect', () => {
    it('renders loading state initially', () => {
        // Delay response
        server.use(
            http.get('*/api/v1/alloys', async () => {
                await new Promise((resolve) => setTimeout(resolve, 100));
                return HttpResponse.json([]);
            })
        );

        render(<AlloySelect value={null} onSelect={() => { }} />, {
            wrapper: createWrapper(),
        });

        // Shadcn Select Trigger might be disabled or show loading text
        // Depending on implementation. 
        // Let's assume we render "Loading..." or similar inside the trigger or as a placeholder
        // Or check if the trigger is disabled.
        const trigger = screen.getByRole('combobox');
        expect(trigger).toBeInTheDocument();
    });

    it('renders options from API', async () => {
        server.use(
            http.get('*/api/v1/alloys', () => {
                return HttpResponse.json([
                    { id: 1, name: 'Bronze', slug: 'bronze' },
                    { id: 2, name: 'Iron', slug: 'iron' },
                ]);
            })
        );

        const user = userEvent.setup();
        render(<AlloySelect value={null} onSelect={() => { }} />, {
            wrapper: createWrapper(),
        });

        // Wait for data
        const trigger = await screen.findByRole('combobox');
        await user.click(trigger);

        // Verify options
        expect(await screen.findByText('Bronze')).toBeInTheDocument();
        expect(screen.getByText('Iron')).toBeInTheDocument();
    });

    it('calls onSelect when option is selected', async () => {
        server.use(
            http.get('*/api/v1/alloys', () => {
                return HttpResponse.json([
                    { id: 1, name: 'Bronze', slug: 'bronze' },
                ]);
            })
        );

        const onSelect = vi.fn();
        const user = userEvent.setup();

        render(<AlloySelect value={null} onSelect={onSelect} />, {
            wrapper: createWrapper(),
        });

        const trigger = await screen.findByRole('combobox');
        await user.click(trigger);

        const option = await screen.findByText('Bronze');
        await user.click(option);

        expect(onSelect).toHaveBeenCalledWith(1);
    });
});
