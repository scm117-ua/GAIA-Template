import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/axios';

// [Feature: Alloy Selector] [Story: AC-PLAYER-002] [Ticket: AC-PLAYER-002-FE-T01]
export interface Alloy {
    id: number;
    name: string;
    slug: string;
}

export const getAlloys = async (): Promise<Alloy[]> => {
    const response = await api.get<Alloy[]>('/alloys');
    return response.data;
};

export const useAlloys = () => {
    return useQuery({
        queryKey: ['alloys'],
        queryFn: getAlloys,
    });
};
