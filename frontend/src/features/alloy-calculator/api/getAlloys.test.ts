import { describe, it, expect } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useAlloys } from './getAlloys';
import { createWrapper } from '@/test/test-utils';
import { server } from '@/mocks/server';
import { http, HttpResponse } from 'msw';

// Mock API URL (should match axios base URL or be intercepted via path)
// Assuming axios uses relative path or configured base.
// In Node environment, axios might need full URL if not configured correctly, 
// but MSW intercepts requests.

describe('useAlloys', () => {
    it('fetches alloys successfully', async () => {
        server.use(
            http.get('*/api/v1/alloys', () => {
                return HttpResponse.json([
                    { id: 1, name: 'Bronze', slug: 'bronze' },
                    { id: 2, name: 'Iron', slug: 'iron' },
                ]);
            })
        );

        const { result } = renderHook(() => useAlloys(), {
            wrapper: createWrapper(),
        });

        await waitFor(() => expect(result.current.isSuccess).toBe(true));

        expect(result.current.data).toHaveLength(2);
        expect(result.current.data?.[0].name).toBe('Bronze');
    });
});
