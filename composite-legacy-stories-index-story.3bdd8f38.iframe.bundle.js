"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[4214],{"./node_modules/@ariakit/react-core/esm/__chunks/636A7WVS.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>CompositeGroup,K:()=>useCompositeGroup});var react=__webpack_require__("./node_modules/react/index.js"),GroupLabelContext=(0,react.createContext)(void 0),_3ORBWXWF=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js"),_6O5OEQGF=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js"),_4R3V3JGP=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),useGroup=(0,_3ORBWXWF.Bi)((props=>{const[labelId,setLabelId]=(0,react.useState)();return props=(0,_6O5OEQGF.OJ)(props,(element=>(0,jsx_runtime.jsx)(GroupLabelContext.Provider,{value:setLabelId,children:element})),[]),props=(0,_4R3V3JGP.ih)({role:"group","aria-labelledby":labelId},props)}));(0,_3ORBWXWF.LM)((props=>{const htmlProps=useGroup(props);return(0,_3ORBWXWF.az)("div",htmlProps)}));var useCompositeGroup=(0,_3ORBWXWF.Bi)((_a=>{var _b=_a,{store}=_b,props=(0,_4R3V3JGP.S0)(_b,["store"]);return props=useGroup(props)})),CompositeGroup=(0,_3ORBWXWF.LM)((props=>{const htmlProps=useCompositeGroup(props);return(0,_3ORBWXWF.az)("div",htmlProps)}))},"./node_modules/@ariakit/react-core/esm/__chunks/BNUFNEVY.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>CompositeRow});var _IB7YUKH5_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/IB7YUKH5.js"),_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js"),_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js"),_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/I2VQ3XGR.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),useCompositeRow=(0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_2__.Bi)((_a=>{var _b=_a,{store,"aria-setsize":ariaSetSize,"aria-posinset":ariaPosInSet}=_b,props=(0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.S0)(_b,["store","aria-setsize","aria-posinset"]);const context=(0,_IB7YUKH5_js__WEBPACK_IMPORTED_MODULE_4__.$)();store=store||context,(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__.kG)(store,!1);const id=(0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_6__.Me)(props.id),baseElement=store.useState((state=>state.baseElement||void 0)),providerValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({id,baseElement,ariaSetSize,ariaPosInSet})),[id,baseElement,ariaSetSize,ariaPosInSet]);return props=(0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_6__.OJ)(props,(element=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_IB7YUKH5_js__WEBPACK_IMPORTED_MODULE_4__.Ft.Provider,{value:providerValue,children:element})),[providerValue]),props=(0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.ih)({id},props)})),CompositeRow=(0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_2__.LM)((props=>{const htmlProps=useCompositeRow(props);return(0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_2__.az)("div",htmlProps)}))},"./packages/compose/build-module/hooks/use-instance-id/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const instanceMap=new WeakMap;const __WEBPACK_DEFAULT_EXPORT__=function useInstanceId(object,prefix,preferredId){return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{if(preferredId)return preferredId;const id=function createId(object){const instances=instanceMap.get(object)||0;return instanceMap.set(object,instances+1),instances}(object);return prefix?`${prefix}-${id}`:id}),[object,preferredId,prefix])}},"./packages/components/src/composite/legacy/stories/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{OneDimensionWithSpreadProps:()=>OneDimensionWithSpreadProps,OneDimensionWithStateProp:()=>OneDimensionWithStateProp,TwoDimensionsWithSpreadProps:()=>TwoDimensionsWithSpreadProps,TwoDimensionsWithStateProp:()=>TwoDimensionsWithStateProp,default:()=>index_story});var react=__webpack_require__("./node_modules/react/index.js"),BNUFNEVY=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/BNUFNEVY.js"),_636A7WVS=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/636A7WVS.js"),_7QTPYGNZ=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/7QTPYGNZ.js"),QZLXIDNP=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/QZLXIDNP.js"),_7GBW5FLS=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/7GBW5FLS.js"),use_instance_id=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function mapLegacyStatePropsToComponentProps(legacyProps){if(legacyProps.state){const{state,...rest}=legacyProps,{store,...props}=mapLegacyStatePropsToComponentProps(state);return{...rest,...props,store}}return legacyProps}function proxyComposite(ProxiedComponent,propMap={}){const displayName=ProxiedComponent.displayName,Component=legacyProps=>{const{store,...rest}=mapLegacyStatePropsToComponentProps(legacyProps),props=rest;return props.id=(0,use_instance_id.Z)(store,props.baseId,props.id),Object.entries(propMap).forEach((([from,to])=>{props.hasOwnProperty(from)&&(Object.assign(props,{[to]:props[from]}),delete props[from])})),delete props.baseId,(0,jsx_runtime.jsx)(ProxiedComponent,{...props,store})};return Component.displayName=displayName,Component}const unproxiedCompositeGroup=(0,react.forwardRef)((({role,...props},ref)=>{const Component="row"===role?BNUFNEVY.G:_636A7WVS.E;return(0,jsx_runtime.jsx)(Component,{ref,role,...props})}));unproxiedCompositeGroup.displayName="CompositeGroup";const Composite=proxyComposite(_7QTPYGNZ.b,{baseId:"id"}),CompositeGroup=proxyComposite(unproxiedCompositeGroup),CompositeItem=proxyComposite(QZLXIDNP.A,{focusable:"accessibleWhenDisabled"});function legacy_useCompositeState(legacyStateOptions={}){const{baseId,currentId:defaultActiveId,orientation,rtl=!1,loop:focusLoop=!1,wrap:focusWrap=!1,shift:focusShift=!1,unstable_virtual:virtualFocus}=legacyStateOptions;return{baseId:(0,use_instance_id.Z)(Composite,"composite",baseId),store:_7GBW5FLS.l({defaultActiveId,rtl,orientation,focusLoop,focusShift,focusWrap,virtualFocus})}}try{legacy_useCompositeState.displayName="CompositeGroup",legacy_useCompositeState.__docgenInfo={description:"",displayName:"CompositeGroup",props:{baseId:{defaultValue:null,description:"ID that will serve as a base for all the items IDs.",name:"baseId",required:!1,type:{name:"string"}},rtl:{defaultValue:{value:"false"},description:'Determines how next and previous functions will behave. If `rtl` is set\nto `true`, they will be inverted. This only affects the composite widget\nbehavior. You still need to set `dir="rtl"` on HTML/CSS.',name:"rtl",required:!1,type:{name:"boolean"}},orientation:{defaultValue:null,description:"Defines the orientation of the composite widget. If the composite has a\nsingle row or column (one-dimensional), the orientation value determines\nwhich arrow keys can be used to move focus.",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},currentId:{defaultValue:null,description:"The current focused item `id`.",name:"currentId",required:!1,type:{name:"string"}},loop:{defaultValue:{value:"false"},description:"Determines how focus moves from the start and end of rows and columns.",name:"loop",required:!1,type:{name:"boolean | Orientation"}},wrap:{defaultValue:{value:"false"},description:"If enabled, moving to the next item from the last one in a row or column\nwill focus the first item in the next row or column and vice-versa.\n\n** Has effect only on two-dimensional composites. **",name:"wrap",required:!1,type:{name:"boolean | Orientation"}},shift:{defaultValue:{value:"false"},description:"If enabled, moving up or down when there's no next item or the next item\nis disabled will shift to the item right before it.\n\n** Has effect only on two-dimensional composites. **",name:"shift",required:!1,type:{name:"boolean"}},unstable_virtual:{defaultValue:null,description:"",name:"unstable_virtual",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/composite/legacy/index.tsx#CompositeGroup"]={docgenInfo:CompositeGroup.__docgenInfo,name:"CompositeGroup",path:"packages/components/src/composite/legacy/index.tsx#CompositeGroup"})}catch(__react_docgen_typescript_loader_error){}function UseCompositeStatePlaceholder(props){return(0,jsx_runtime.jsx)("dl",{children:Object.entries(props).map((([name,value])=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("dt",{children:name}),(0,jsx_runtime.jsx)("dd",{children:JSON.stringify(value)})]})))})}UseCompositeStatePlaceholder.displayName="UseCompositeStatePlaceholder",UseCompositeStatePlaceholder.displayName="useCompositeState";try{UseCompositeStatePlaceholder.displayName="useCompositeState",UseCompositeStatePlaceholder.__docgenInfo={description:"",displayName:"useCompositeState",props:{baseId:{defaultValue:null,description:"ID that will serve as a base for all the items IDs.",name:"baseId",required:!1,type:{name:"string"}},rtl:{defaultValue:{value:"false"},description:'Determines how next and previous functions will behave. If `rtl` is set\nto `true`, they will be inverted. This only affects the composite widget\nbehavior. You still need to set `dir="rtl"` on HTML/CSS.',name:"rtl",required:!1,type:{name:"boolean"}},orientation:{defaultValue:null,description:"Defines the orientation of the composite widget. If the composite has a\nsingle row or column (one-dimensional), the orientation value determines\nwhich arrow keys can be used to move focus.",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},currentId:{defaultValue:null,description:"The current focused item `id`.",name:"currentId",required:!1,type:{name:"string"}},loop:{defaultValue:{value:"false"},description:"Determines how focus moves from the start and end of rows and columns.",name:"loop",required:!1,type:{name:"boolean | Orientation"}},wrap:{defaultValue:{value:"false"},description:"If enabled, moving to the next item from the last one in a row or column\nwill focus the first item in the next row or column and vice-versa.\n\n** Has effect only on two-dimensional composites. **",name:"wrap",required:!1,type:{name:"boolean | Orientation"}},shift:{defaultValue:{value:"false"},description:"If enabled, moving up or down when there's no next item or the next item\nis disabled will shift to the item right before it.\n\n** Has effect only on two-dimensional composites. **",name:"shift",required:!1,type:{name:"boolean"}},unstable_virtual:{defaultValue:null,description:"",name:"unstable_virtual",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/composite/legacy/stories/utils.tsx#useCompositeState"]={docgenInfo:useCompositeState.__docgenInfo,name:"useCompositeState",path:"packages/components/src/composite/legacy/stories/utils.tsx#useCompositeState"})}catch(__react_docgen_typescript_loader_error){}const index_story={title:"Components/Composite",component:UseCompositeStatePlaceholder,subcomponents:{Composite,CompositeGroup,CompositeItem},args:{},parameters:{sourceLink:"packages/components/src/composite/legacy",controls:{exclude:/^unstable_/},docs:{canvas:{sourceState:"shown"},source:{transform:function transform(code,context){return[`const state = useCompositeState(${` ${JSON.stringify(context.args,null,2)} `.replace(" {} ","")});`,"","return (","  "+code.replaceAll(/state=\{\{[\s\S]*?\}\}/g,"state={ state }").replaceAll("=>","").replaceAll(/baseId=[^>]+?(\s*>)/g,((_,close)=>`{ ...state }${close}`)).replaceAll(/<Composite\w+[\s\S]*?>/g,(match=>match.replaceAll(/\s+\s/g," "))).replaceAll(/ >\s+([\w\s]*?)\s+<\//g,((_,value)=>`>${value}</`)).replaceAll("} >","}>").replaceAll(/\n/g,"\n  "),");"].join("\n")}}}},argTypes:{orientation:{control:"select"},loop:{control:"select",options:[!0,!1,"horizontal","vertical"]},wrap:{control:"select",options:[!0,!1,"horizontal","vertical"]}}},TwoDimensionsWithStateProp=initialState=>{const state=legacy_useCompositeState(initialState);return(0,jsx_runtime.jsxs)(Composite,{role:"grid",state,"aria-label":"Legacy Composite with state prop (two dimensions)",children:[(0,jsx_runtime.jsxs)(CompositeGroup,{state,role:"row",children:[(0,jsx_runtime.jsx)(CompositeItem,{state,role:"gridcell",children:"Item A1"}),(0,jsx_runtime.jsx)(CompositeItem,{state,role:"gridcell",children:"Item A2"}),(0,jsx_runtime.jsx)(CompositeItem,{state,role:"gridcell",children:"Item A3"})]}),(0,jsx_runtime.jsxs)(CompositeGroup,{state,role:"row",children:[(0,jsx_runtime.jsx)(CompositeItem,{state,role:"gridcell",children:"Item B1"}),(0,jsx_runtime.jsx)(CompositeItem,{state,role:"gridcell",children:"Item B2"}),(0,jsx_runtime.jsx)(CompositeItem,{state,role:"gridcell",children:"Item B3"})]}),(0,jsx_runtime.jsxs)(CompositeGroup,{state,role:"row",children:[(0,jsx_runtime.jsx)(CompositeItem,{state,role:"gridcell",children:"Item C1"}),(0,jsx_runtime.jsx)(CompositeItem,{state,role:"gridcell",children:"Item C2"}),(0,jsx_runtime.jsx)(CompositeItem,{state,role:"gridcell",children:"Item C3"})]})]})};TwoDimensionsWithStateProp.displayName="TwoDimensionsWithStateProp",TwoDimensionsWithStateProp.args={};const TwoDimensionsWithSpreadProps=initialState=>{const state=legacy_useCompositeState(initialState);return(0,jsx_runtime.jsxs)(Composite,{role:"grid",...state,"aria-label":"Legacy Composite with spread props (two dimensions)",children:[(0,jsx_runtime.jsxs)(CompositeGroup,{...state,role:"row",children:[(0,jsx_runtime.jsx)(CompositeItem,{...state,role:"gridcell",children:"Item A1"}),(0,jsx_runtime.jsx)(CompositeItem,{...state,role:"gridcell",children:"Item A2"}),(0,jsx_runtime.jsx)(CompositeItem,{...state,role:"gridcell",children:"Item A3"})]}),(0,jsx_runtime.jsxs)(CompositeGroup,{...state,role:"row",children:[(0,jsx_runtime.jsx)(CompositeItem,{...state,role:"gridcell",children:"Item B1"}),(0,jsx_runtime.jsx)(CompositeItem,{...state,role:"gridcell",children:"Item B2"}),(0,jsx_runtime.jsx)(CompositeItem,{...state,role:"gridcell",children:"Item B3"})]}),(0,jsx_runtime.jsxs)(CompositeGroup,{...state,role:"row",children:[(0,jsx_runtime.jsx)(CompositeItem,{...state,role:"gridcell",children:"Item C1"}),(0,jsx_runtime.jsx)(CompositeItem,{...state,role:"gridcell",children:"Item C2"}),(0,jsx_runtime.jsx)(CompositeItem,{...state,role:"gridcell",children:"Item C3"})]})]})};TwoDimensionsWithSpreadProps.displayName="TwoDimensionsWithSpreadProps",TwoDimensionsWithSpreadProps.args={};const OneDimensionWithStateProp=initialState=>{const state=legacy_useCompositeState(initialState);return(0,jsx_runtime.jsxs)(Composite,{role:"list",state,"aria-label":"Legacy Composite with state prop (one dimension)",children:[(0,jsx_runtime.jsx)(CompositeItem,{state,role:"listitem",children:"Item 1"}),(0,jsx_runtime.jsx)(CompositeItem,{state,role:"listitem",children:"Item 2"}),(0,jsx_runtime.jsx)(CompositeItem,{state,role:"listitem",children:"Item 3"}),(0,jsx_runtime.jsx)(CompositeItem,{state,role:"listitem",children:"Item 4"}),(0,jsx_runtime.jsx)(CompositeItem,{state,role:"listitem",children:"Item 5"})]})};OneDimensionWithStateProp.displayName="OneDimensionWithStateProp",OneDimensionWithStateProp.args={};const OneDimensionWithSpreadProps=initialState=>{const state=legacy_useCompositeState(initialState);return(0,jsx_runtime.jsxs)(Composite,{role:"list",...state,"aria-label":"Legacy Composite with spread props (one dimension)",children:[(0,jsx_runtime.jsx)(CompositeItem,{...state,role:"listitem",children:"Item 1"}),(0,jsx_runtime.jsx)(CompositeItem,{...state,role:"listitem",children:"Item 2"}),(0,jsx_runtime.jsx)(CompositeItem,{...state,role:"listitem",children:"Item 3"}),(0,jsx_runtime.jsx)(CompositeItem,{...state,role:"listitem",children:"Item 4"}),(0,jsx_runtime.jsx)(CompositeItem,{...state,role:"listitem",children:"Item 5"})]})};OneDimensionWithSpreadProps.displayName="OneDimensionWithSpreadProps",OneDimensionWithSpreadProps.args={},TwoDimensionsWithStateProp.parameters={...TwoDimensionsWithStateProp.parameters,docs:{...TwoDimensionsWithStateProp.parameters?.docs,source:{originalSource:'initialState => {\n  const state = useCompositeState(initialState);\n  return <Composite role="grid" state={state} aria-label="Legacy Composite with state prop (two dimensions)">\n            <CompositeGroup state={state} role="row">\n                <CompositeItem state={state} role="gridcell">\n                    Item A1\n                </CompositeItem>\n                <CompositeItem state={state} role="gridcell">\n                    Item A2\n                </CompositeItem>\n                <CompositeItem state={state} role="gridcell">\n                    Item A3\n                </CompositeItem>\n            </CompositeGroup>\n            <CompositeGroup state={state} role="row">\n                <CompositeItem state={state} role="gridcell">\n                    Item B1\n                </CompositeItem>\n                <CompositeItem state={state} role="gridcell">\n                    Item B2\n                </CompositeItem>\n                <CompositeItem state={state} role="gridcell">\n                    Item B3\n                </CompositeItem>\n            </CompositeGroup>\n            <CompositeGroup state={state} role="row">\n                <CompositeItem state={state} role="gridcell">\n                    Item C1\n                </CompositeItem>\n                <CompositeItem state={state} role="gridcell">\n                    Item C2\n                </CompositeItem>\n                <CompositeItem state={state} role="gridcell">\n                    Item C3\n                </CompositeItem>\n            </CompositeGroup>\n        </Composite>;\n}',...TwoDimensionsWithStateProp.parameters?.docs?.source}}},TwoDimensionsWithSpreadProps.parameters={...TwoDimensionsWithSpreadProps.parameters,docs:{...TwoDimensionsWithSpreadProps.parameters?.docs,source:{originalSource:'initialState => {\n  const state = useCompositeState(initialState);\n  return <Composite role="grid" {...state} aria-label="Legacy Composite with spread props (two dimensions)">\n            <CompositeGroup {...state} role="row">\n                <CompositeItem {...state} role="gridcell">\n                    Item A1\n                </CompositeItem>\n                <CompositeItem {...state} role="gridcell">\n                    Item A2\n                </CompositeItem>\n                <CompositeItem {...state} role="gridcell">\n                    Item A3\n                </CompositeItem>\n            </CompositeGroup>\n            <CompositeGroup {...state} role="row">\n                <CompositeItem {...state} role="gridcell">\n                    Item B1\n                </CompositeItem>\n                <CompositeItem {...state} role="gridcell">\n                    Item B2\n                </CompositeItem>\n                <CompositeItem {...state} role="gridcell">\n                    Item B3\n                </CompositeItem>\n            </CompositeGroup>\n            <CompositeGroup {...state} role="row">\n                <CompositeItem {...state} role="gridcell">\n                    Item C1\n                </CompositeItem>\n                <CompositeItem {...state} role="gridcell">\n                    Item C2\n                </CompositeItem>\n                <CompositeItem {...state} role="gridcell">\n                    Item C3\n                </CompositeItem>\n            </CompositeGroup>\n        </Composite>;\n}',...TwoDimensionsWithSpreadProps.parameters?.docs?.source}}},OneDimensionWithStateProp.parameters={...OneDimensionWithStateProp.parameters,docs:{...OneDimensionWithStateProp.parameters?.docs,source:{originalSource:'initialState => {\n  const state = useCompositeState(initialState);\n  return <Composite role="list" state={state} aria-label="Legacy Composite with state prop (one dimension)">\n            <CompositeItem state={state} role="listitem">\n                Item 1\n            </CompositeItem>\n            <CompositeItem state={state} role="listitem">\n                Item 2\n            </CompositeItem>\n            <CompositeItem state={state} role="listitem">\n                Item 3\n            </CompositeItem>\n            <CompositeItem state={state} role="listitem">\n                Item 4\n            </CompositeItem>\n            <CompositeItem state={state} role="listitem">\n                Item 5\n            </CompositeItem>\n        </Composite>;\n}',...OneDimensionWithStateProp.parameters?.docs?.source}}},OneDimensionWithSpreadProps.parameters={...OneDimensionWithSpreadProps.parameters,docs:{...OneDimensionWithSpreadProps.parameters?.docs,source:{originalSource:'initialState => {\n  const state = useCompositeState(initialState);\n  return <Composite role="list" {...state} aria-label="Legacy Composite with spread props (one dimension)">\n            <CompositeItem {...state} role="listitem">\n                Item 1\n            </CompositeItem>\n            <CompositeItem {...state} role="listitem">\n                Item 2\n            </CompositeItem>\n            <CompositeItem {...state} role="listitem">\n                Item 3\n            </CompositeItem>\n            <CompositeItem {...state} role="listitem">\n                Item 4\n            </CompositeItem>\n            <CompositeItem {...state} role="listitem">\n                Item 5\n            </CompositeItem>\n        </Composite>;\n}',...OneDimensionWithSpreadProps.parameters?.docs?.source}}}}}]);