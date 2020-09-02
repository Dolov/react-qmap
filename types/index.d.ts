import * as React from 'react';

export interface MapOptionProps {
    center?: PostionProps;
    zoom?: number;
    minZoom?: number;
    maxZoom?: number;
    mapZoomType?: unknown;
    noClear?: boolean;
    backgroundColor?: string;
    boundary?: unknown;
    draggableCursor?: string;
    draggingCursor?: string;
    mapTypeId?: unknown;
    mapStyleId?: string;
    draggable?: boolean;
    scrollwheel?: boolean;
    disableDoubleClickZoom?: boolean;
    keyboardShortcuts?: boolean;
    mapTypeControl?: boolean;
    mapTypeControlOptions?: {
        mapTypeIds: Array<any> | Array<string>;
        position: unknown;
    },
    panControl?: boolean;
    panControlOptions?: {
        position: unknown;
    },
    zoomControl?: boolean;
    zoomControlOptions?: {
        position: unknown;
        style: unknown;
    },
    scaleControl?: boolean;
    scaleControlOptions?: {
        position: unknown;
    }
}

export interface PostionProps {
    latitude: number;
    longitude: number;
}

export interface ReactQMapProps {
    apiKey: string;
    center: PostionProps;
    style?: React.CSSProperties;
    getMap?: (currentMapInstance: any, globalMap: any) => void;
    className?: string;
    mySpot?: PostionProps;
    getContainer?: (container: Element) => void;
    initialOptions?: MapOptionProps;
    libraries?: Array<any>;

}

declare const ReactQMap: React.ComponentType<ReactQMapProps>

export default ReactQMap