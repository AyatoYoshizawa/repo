/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createHTTPValidationErrorFromDiscriminatorValue, createTaskFromDiscriminatorValue, type HTTPValidationError, type Task } from '../../../../models/';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /api/v1/tasks/list
 */
export interface ListRequestBuilder extends BaseRequestBuilder<ListRequestBuilder> {
    /**
     * 一覧を取得:param title::param status::return:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Task[]>}
     * @throws {HTTPValidationError} error when the service returns a 422 status code
     */
     get(requestConfiguration?: RequestConfiguration<ListRequestBuilderGetQueryParameters> | undefined) : Promise<Task[] | undefined>;
    /**
     * 一覧を取得:param title::param status::return:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ListRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * 一覧を取得:param title::param status::return:
 */
export interface ListRequestBuilderGetQueryParameters {
    status?: number;
    title?: string;
}
/**
 * Uri template for the request builder.
 */
export const ListRequestBuilderUriTemplate = "{+baseurl}/api/v1/tasks/list{?status*,title*}";
/**
 * Metadata for all the requests in the request builder.
 */
export const ListRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ListRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            422: createHTTPValidationErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendCollection",
        responseBodyFactory:  createTaskFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */