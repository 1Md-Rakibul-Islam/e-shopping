export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

export interface FetchProductsParams {
    page?: number;
    limit?: number;
    category?: string;
    search?: string;
}
