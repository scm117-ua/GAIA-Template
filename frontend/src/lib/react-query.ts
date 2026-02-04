import { QueryClient } from '@tanstack/react-query';

// [Feature: Infrastructure] [Story: setup] [Ticket: AC-PLAYER-002-FE-T01]
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60, // 1 minute
            retry: 1,
            refetchOnWindowFocus: false,
        },
    },
});
