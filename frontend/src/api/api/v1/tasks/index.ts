/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { CreateRequestBuilderRequestsMetadata, type CreateRequestBuilder } from './create/';
// @ts-ignore
import { DeleteRequestBuilderNavigationMetadata, type DeleteRequestBuilder } from './delete/';
// @ts-ignore
import { DetailRequestBuilderNavigationMetadata, type DetailRequestBuilder } from './detail/';
// @ts-ignore
import { ListRequestBuilderRequestsMetadata, type ListRequestBuilder } from './list/';
// @ts-ignore
import { type UpdateRequestBuilder, UpdateRequestBuilderNavigationMetadata } from './update/';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /api/v1/tasks
 */
export interface TasksRequestBuilder extends BaseRequestBuilder<TasksRequestBuilder> {
    /**
     * The create property
     */
    get create(): CreateRequestBuilder;
    /**
     * The deletePath property
     */
    get deletePath(): DeleteRequestBuilder;
    /**
     * The detail property
     */
    get detail(): DetailRequestBuilder;
    /**
     * The list property
     */
    get list(): ListRequestBuilder;
    /**
     * The update property
     */
    get update(): UpdateRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export const TasksRequestBuilderUriTemplate = "{+baseurl}/api/v1/tasks";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const TasksRequestBuilderNavigationMetadata: Record<Exclude<keyof TasksRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    create: {
        requestsMetadata: CreateRequestBuilderRequestsMetadata,
    },
    deletePath: {
        navigationMetadata: DeleteRequestBuilderNavigationMetadata,
    },
    detail: {
        navigationMetadata: DetailRequestBuilderNavigationMetadata,
    },
    list: {
        requestsMetadata: ListRequestBuilderRequestsMetadata,
    },
    update: {
        navigationMetadata: UpdateRequestBuilderNavigationMetadata,
    },
};
/* tslint:enable */
/* eslint-enable */
