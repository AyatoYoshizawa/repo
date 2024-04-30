/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 作成リクエストのデータ受取用（つまり、まだデータベースに永続化されていない）ので id が不在のもの
 * @export
 * @interface TaskCreate
 */
export interface TaskCreate {
    /**
     * 
     * @type {string}
     * @memberof TaskCreate
     */
    title: string;
    /**
     * 
     * @type {number}
     * @memberof TaskCreate
     */
    status: number;
}

/**
 * Check if a given object implements the TaskCreate interface.
 */
export function instanceOfTaskCreate(value: object): boolean {
    if (!('title' in value)) return false;
    if (!('status' in value)) return false;
    return true;
}

export function TaskCreateFromJSON(json: any): TaskCreate {
    return TaskCreateFromJSONTyped(json, false);
}

export function TaskCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'title': json['title'],
        'status': json['status'],
    };
}

export function TaskCreateToJSON(value?: TaskCreate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'title': value['title'],
        'status': value['status'],
    };
}
