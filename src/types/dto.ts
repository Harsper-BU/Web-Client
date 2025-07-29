export interface PageResponse<T> {
    content: T[];
    totalPage: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    last: boolean;
    empty: boolean;
    numberOfElements: number;
}