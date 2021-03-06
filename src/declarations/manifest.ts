import * as d from './index';


export interface Manifest {
  manifestName?: string;
  modulesFiles?: ModuleFile[];
  bundles?: ManifestBundle[];
  global?: ModuleFile;
  dependentManifests?: Manifest[];
  compiler?: ManifestCompiler;
}


export interface ManifestBundle {
  components: string[];
}


export interface ManifestCompiler {
  name: string;
  version: string;
  typescriptVersion?: string;
}


export interface AppRegistry {
  namespace?: string;
  fsNamespace?: string;
  loader?: string;
  core?: string;
  corePolyfilled?: string;
  global?: string;
  components?: AppRegistryComponents;
}


export interface AppRegistryComponents {
  [tagName: string]: string | d.BundleIds;
}


export interface Bundle {
  entryKey?: string;
  moduleFiles: d.ModuleFile[];
  dependencies?: string[];
  requiresScopedStyles?: boolean;
  modeNames?: string[];
}


export interface ModuleFiles {
  [filePath: string]: ModuleFile;
}


export interface ModuleFile {
  jsFilePath?: string;
  dtsFilePath?: string;
  cmpMeta?: d.ComponentMeta;
  isCollectionDependency?: boolean;
  excludeFromCollection?: boolean;
  originalCollectionComponentPath?: string;
}


export interface ModuleBundles {
  [bundleId: string]: string;
}


// this maps the json data to our internal data structure
// so that the internal data structure "could" change,
// but the external user data will always use the same api
// consider these property values to be locked in as is
// there should be a VERY good reason to have to rename them
// DO NOT UPDATE PROPERTY KEYS COMING FROM THE EXTERNAL DATA!!
// DO NOT UPDATE PROPERTY KEYS COMING FROM THE EXTERNAL DATA!!
// DO NOT UPDATE PROPERTY KEYS COMING FROM THE EXTERNAL DATA!!

export interface ManifestData {
  bundles?: BundleData[];
  components?: ComponentData[];
  global?: string;
  compiler?: {
    name: string;
    version: string;
    typescriptVersion?: string;
  };
}


export interface ComponentData {
  tag?: string;
  componentPath?: string;
  componentClass?: string;
  styles?: StylesData;
  props?: PropData[];
  states?: StateData[];
  listeners?: ListenerData[];
  methods?: MethodData[];
  events?: EventData[];
  connect?: ConnectData[];
  context?: ContextData[];
  hostElement?: HostElementData;
  host?: any;
  assetPaths?: string[];
  slot?: 'hasSlots'|'hasNamedSlots';
  shadow?: boolean;
  scoped?: boolean;
  priority?: 'low';
}

export interface StylesData {
  [modeName: string]: StyleData;
}

export interface StyleData {
  stylePaths?: string[];
  style?: string;
}

export interface PropData {
  name?: string;
  type?: 'Boolean'|'Number'|'String'|'Any';
  mutable?: boolean;
  watch?: string[];
}

export interface StateData {
  name: string;
}

export interface ListenerData {
  event: string;
  method: string;
  capture?: boolean;
  passive?: boolean;
  enabled?: boolean;
}

export interface MethodData {
  name: string;
}

export interface EventData {
  event: string;
  method?: string;
  bubbles?: boolean;
  cancelable?: boolean;
  composed?: boolean;
}

export interface ConnectData {
  name: string;
  tag?: string;
}

export interface ContextData {
  name: string;
  id?: string;
}

export interface HostElementData {
  name: string;
}

export interface BundleData {
  components?: string[];
}
