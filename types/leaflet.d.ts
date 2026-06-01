declare module "leaflet" {
  export type LatLngExpression = readonly [number, number] | { lat: number; lng: number };

  export interface MapOptions {
    center?: LatLngExpression;
    zoom?: number;
    zoomControl?: boolean;
    scrollWheelZoom?: boolean;
    dragging?: boolean;
    touchZoom?: boolean;
    doubleClickZoom?: boolean;
    boxZoom?: boolean;
    keyboard?: boolean;
    attributionControl?: boolean;
  }

  export interface Map {
    remove(): void;
  }

  export interface TileLayerOptions {
    subdomains?: string | string[];
    maxZoom?: number;
  }

  export interface TileLayer {
    addTo(map: Map): TileLayer;
  }

  export interface LeafletStatic {
    map(element: HTMLElement | string, options?: MapOptions): Map;
    tileLayer(urlTemplate: string, options?: TileLayerOptions): TileLayer;
  }

  const L: LeafletStatic;
  export default L;
}
