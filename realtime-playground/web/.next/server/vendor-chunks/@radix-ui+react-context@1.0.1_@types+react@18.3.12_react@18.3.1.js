"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-context@1.0.1_@types+react@18.3.12_react@18.3.1";
exports.ids = ["vendor-chunks/@radix-ui+react-context@1.0.1_@types+react@18.3.12_react@18.3.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@radix-ui+react-context@1.0.1_@types+react@18.3.12_react@18.3.1/node_modules/@radix-ui/react-context/dist/index.mjs":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-context@1.0.1_@types+react@18.3.12_react@18.3.1/node_modules/@radix-ui/react-context/dist/index.mjs ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createContext: () => (/* binding */ $c512c27ab02ef895$export$fd42f52fd3ae1109),\n/* harmony export */   createContextScope: () => (/* binding */ $c512c27ab02ef895$export$50c7b4e9d9f19c1)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.2.7_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\n\n\nfunction $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {\n    const Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext);\n    function Provider(props) {\n        const { children: children , ...context } = props; // Only re-memoize when prop values change\n        // eslint-disable-next-line react-hooks/exhaustive-deps\n        const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>context\n        , Object.values(context));\n        return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Context.Provider, {\n            value: value\n        }, children);\n    }\n    function useContext(consumerName) {\n        const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);\n        if (context) return context;\n        if (defaultContext !== undefined) return defaultContext; // if a defaultContext wasn't specified, it's a required context.\n        throw new Error(`\\`${consumerName}\\` must be used within \\`${rootComponentName}\\``);\n    }\n    Provider.displayName = rootComponentName + 'Provider';\n    return [\n        Provider,\n        useContext\n    ];\n}\n/* -------------------------------------------------------------------------------------------------\n * createContextScope\n * -----------------------------------------------------------------------------------------------*/ function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName, createContextScopeDeps = []) {\n    let defaultContexts = [];\n    /* -----------------------------------------------------------------------------------------------\n   * createContext\n   * ---------------------------------------------------------------------------------------------*/ function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {\n        const BaseContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext);\n        const index = defaultContexts.length;\n        defaultContexts = [\n            ...defaultContexts,\n            defaultContext\n        ];\n        function Provider(props) {\n            const { scope: scope , children: children , ...context } = props;\n            const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext; // Only re-memoize when prop values change\n            // eslint-disable-next-line react-hooks/exhaustive-deps\n            const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>context\n            , Object.values(context));\n            return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Context.Provider, {\n                value: value\n            }, children);\n        }\n        function useContext(consumerName, scope) {\n            const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext;\n            const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);\n            if (context) return context;\n            if (defaultContext !== undefined) return defaultContext; // if a defaultContext wasn't specified, it's a required context.\n            throw new Error(`\\`${consumerName}\\` must be used within \\`${rootComponentName}\\``);\n        }\n        Provider.displayName = rootComponentName + 'Provider';\n        return [\n            Provider,\n            useContext\n        ];\n    }\n    /* -----------------------------------------------------------------------------------------------\n   * createScope\n   * ---------------------------------------------------------------------------------------------*/ const createScope = ()=>{\n        const scopeContexts = defaultContexts.map((defaultContext)=>{\n            return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContext);\n        });\n        return function useScope(scope) {\n            const contexts = (scope === null || scope === void 0 ? void 0 : scope[scopeName]) || scopeContexts;\n            return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({\n                    [`__scope${scopeName}`]: {\n                        ...scope,\n                        [scopeName]: contexts\n                    }\n                })\n            , [\n                scope,\n                contexts\n            ]);\n        };\n    };\n    createScope.scopeName = scopeName;\n    return [\n        $c512c27ab02ef895$export$fd42f52fd3ae1109,\n        $c512c27ab02ef895$var$composeContextScopes(createScope, ...createContextScopeDeps)\n    ];\n}\n/* -------------------------------------------------------------------------------------------------\n * composeContextScopes\n * -----------------------------------------------------------------------------------------------*/ function $c512c27ab02ef895$var$composeContextScopes(...scopes) {\n    const baseScope = scopes[0];\n    if (scopes.length === 1) return baseScope;\n    const createScope1 = ()=>{\n        const scopeHooks = scopes.map((createScope)=>({\n                useScope: createScope(),\n                scopeName: createScope.scopeName\n            })\n        );\n        return function useComposedScopes(overrideScopes) {\n            const nextScopes1 = scopeHooks.reduce((nextScopes, { useScope: useScope , scopeName: scopeName  })=>{\n                // We are calling a hook inside a callback which React warns against to avoid inconsistent\n                // renders, however, scoping doesn't have render side effects so we ignore the rule.\n                // eslint-disable-next-line react-hooks/rules-of-hooks\n                const scopeProps = useScope(overrideScopes);\n                const currentScope = scopeProps[`__scope${scopeName}`];\n                return {\n                    ...nextScopes,\n                    ...currentScope\n                };\n            }, {});\n            return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({\n                    [`__scope${baseScope.scopeName}`]: nextScopes1\n                })\n            , [\n                nextScopes1\n            ]);\n        };\n    };\n    createScope1.scopeName = baseScope.scopeName;\n    return createScope1;\n}\n\n\n\n\n\n//# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LWNvbnRleHRAMS4wLjFfQHR5cGVzK3JlYWN0QDE4LjMuMTJfcmVhY3RAMTguMy4xL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtY29udGV4dC9kaXN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0o7OztBQUcvSjtBQUNBLGtDQUFrQyxvREFBb0I7QUFDdEQ7QUFDQSxnQkFBZ0Isa0NBQWtDLFNBQVM7QUFDM0Q7QUFDQSxzQkFBc0IsOENBQWM7QUFDcEM7QUFDQSw2QkFBNkIsb0RBQW9CO0FBQ2pEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx3QkFBd0IsaURBQWlCO0FBQ3pDO0FBQ0EsaUVBQWlFO0FBQ2pFLDZCQUE2QixhQUFhLDJCQUEyQixrQkFBa0I7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxvREFBb0I7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlEQUFpRDtBQUNyRSxvSEFBb0g7QUFDcEg7QUFDQSwwQkFBMEIsOENBQWM7QUFDeEM7QUFDQSxpQ0FBaUMsb0RBQW9CO0FBQ3JEO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixpREFBaUI7QUFDN0M7QUFDQSxxRUFBcUU7QUFDckUsaUNBQWlDLGFBQWEsMkJBQTJCLGtCQUFrQjtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLG9EQUFvQjtBQUNyRCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLG1CQUFtQiw4Q0FBYztBQUNqQywrQkFBK0IsVUFBVTtBQUN6QztBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxpRUFBaUUsNENBQTRDO0FBQzdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELFVBQVU7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLElBQUk7QUFDakIsbUJBQW1CLDhDQUFjO0FBQ2pDLCtCQUErQixvQkFBb0I7QUFDbkQsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS29JO0FBQ3BJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmFkaXgtdWkrcmVhY3QtY29udGV4dEAxLjAuMV9AdHlwZXMrcmVhY3RAMTguMy4xMl9yZWFjdEAxOC4zLjEvbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1jb250ZXh0L2Rpc3QvaW5kZXgubWpzP2M1OWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDb250ZXh0IGFzICQzYmtBSyRjcmVhdGVDb250ZXh0LCB1c2VNZW1vIGFzICQzYmtBSyR1c2VNZW1vLCBjcmVhdGVFbGVtZW50IGFzICQzYmtBSyRjcmVhdGVFbGVtZW50LCB1c2VDb250ZXh0IGFzICQzYmtBSyR1c2VDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcblxuXG5mdW5jdGlvbiAkYzUxMmMyN2FiMDJlZjg5NSRleHBvcnQkZmQ0MmY1MmZkM2FlMTEwOShyb290Q29tcG9uZW50TmFtZSwgZGVmYXVsdENvbnRleHQpIHtcbiAgICBjb25zdCBDb250ZXh0ID0gLyojX19QVVJFX18qLyAkM2JrQUskY3JlYXRlQ29udGV4dChkZWZhdWx0Q29udGV4dCk7XG4gICAgZnVuY3Rpb24gUHJvdmlkZXIocHJvcHMpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbjogY2hpbGRyZW4gLCAuLi5jb250ZXh0IH0gPSBwcm9wczsgLy8gT25seSByZS1tZW1vaXplIHdoZW4gcHJvcCB2YWx1ZXMgY2hhbmdlXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICAgICAgY29uc3QgdmFsdWUgPSAkM2JrQUskdXNlTWVtbygoKT0+Y29udGV4dFxuICAgICAgICAsIE9iamVjdC52YWx1ZXMoY29udGV4dCkpO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyAkM2JrQUskY3JlYXRlRWxlbWVudChDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSwgY2hpbGRyZW4pO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1c2VDb250ZXh0KGNvbnN1bWVyTmFtZSkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gJDNia0FLJHVzZUNvbnRleHQoQ29udGV4dCk7XG4gICAgICAgIGlmIChjb250ZXh0KSByZXR1cm4gY29udGV4dDtcbiAgICAgICAgaWYgKGRlZmF1bHRDb250ZXh0ICE9PSB1bmRlZmluZWQpIHJldHVybiBkZWZhdWx0Q29udGV4dDsgLy8gaWYgYSBkZWZhdWx0Q29udGV4dCB3YXNuJ3Qgc3BlY2lmaWVkLCBpdCdzIGEgcmVxdWlyZWQgY29udGV4dC5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBcXGAke2NvbnN1bWVyTmFtZX1cXGAgbXVzdCBiZSB1c2VkIHdpdGhpbiBcXGAke3Jvb3RDb21wb25lbnROYW1lfVxcYGApO1xuICAgIH1cbiAgICBQcm92aWRlci5kaXNwbGF5TmFtZSA9IHJvb3RDb21wb25lbnROYW1lICsgJ1Byb3ZpZGVyJztcbiAgICByZXR1cm4gW1xuICAgICAgICBQcm92aWRlcixcbiAgICAgICAgdXNlQ29udGV4dFxuICAgIF07XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBjcmVhdGVDb250ZXh0U2NvcGVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi8gZnVuY3Rpb24gJGM1MTJjMjdhYjAyZWY4OTUkZXhwb3J0JDUwYzdiNGU5ZDlmMTljMShzY29wZU5hbWUsIGNyZWF0ZUNvbnRleHRTY29wZURlcHMgPSBbXSkge1xuICAgIGxldCBkZWZhdWx0Q29udGV4dHMgPSBbXTtcbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBjcmVhdGVDb250ZXh0XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovIGZ1bmN0aW9uICRjNTEyYzI3YWIwMmVmODk1JGV4cG9ydCRmZDQyZjUyZmQzYWUxMTA5KHJvb3RDb21wb25lbnROYW1lLCBkZWZhdWx0Q29udGV4dCkge1xuICAgICAgICBjb25zdCBCYXNlQ29udGV4dCA9IC8qI19fUFVSRV9fKi8gJDNia0FLJGNyZWF0ZUNvbnRleHQoZGVmYXVsdENvbnRleHQpO1xuICAgICAgICBjb25zdCBpbmRleCA9IGRlZmF1bHRDb250ZXh0cy5sZW5ndGg7XG4gICAgICAgIGRlZmF1bHRDb250ZXh0cyA9IFtcbiAgICAgICAgICAgIC4uLmRlZmF1bHRDb250ZXh0cyxcbiAgICAgICAgICAgIGRlZmF1bHRDb250ZXh0XG4gICAgICAgIF07XG4gICAgICAgIGZ1bmN0aW9uIFByb3ZpZGVyKHByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCB7IHNjb3BlOiBzY29wZSAsIGNoaWxkcmVuOiBjaGlsZHJlbiAsIC4uLmNvbnRleHQgfSA9IHByb3BzO1xuICAgICAgICAgICAgY29uc3QgQ29udGV4dCA9IChzY29wZSA9PT0gbnVsbCB8fCBzY29wZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2NvcGVbc2NvcGVOYW1lXVtpbmRleF0pIHx8IEJhc2VDb250ZXh0OyAvLyBPbmx5IHJlLW1lbW9pemUgd2hlbiBwcm9wIHZhbHVlcyBjaGFuZ2VcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gJDNia0FLJHVzZU1lbW8oKCk9PmNvbnRleHRcbiAgICAgICAgICAgICwgT2JqZWN0LnZhbHVlcyhjb250ZXh0KSk7XG4gICAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyAkM2JrQUskY3JlYXRlRWxlbWVudChDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgICB9LCBjaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdXNlQ29udGV4dChjb25zdW1lck5hbWUsIHNjb3BlKSB7XG4gICAgICAgICAgICBjb25zdCBDb250ZXh0ID0gKHNjb3BlID09PSBudWxsIHx8IHNjb3BlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzY29wZVtzY29wZU5hbWVdW2luZGV4XSkgfHwgQmFzZUNvbnRleHQ7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gJDNia0FLJHVzZUNvbnRleHQoQ29udGV4dCk7XG4gICAgICAgICAgICBpZiAoY29udGV4dCkgcmV0dXJuIGNvbnRleHQ7XG4gICAgICAgICAgICBpZiAoZGVmYXVsdENvbnRleHQgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGRlZmF1bHRDb250ZXh0OyAvLyBpZiBhIGRlZmF1bHRDb250ZXh0IHdhc24ndCBzcGVjaWZpZWQsIGl0J3MgYSByZXF1aXJlZCBjb250ZXh0LlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBcXGAke2NvbnN1bWVyTmFtZX1cXGAgbXVzdCBiZSB1c2VkIHdpdGhpbiBcXGAke3Jvb3RDb21wb25lbnROYW1lfVxcYGApO1xuICAgICAgICB9XG4gICAgICAgIFByb3ZpZGVyLmRpc3BsYXlOYW1lID0gcm9vdENvbXBvbmVudE5hbWUgKyAnUHJvdmlkZXInO1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgUHJvdmlkZXIsXG4gICAgICAgICAgICB1c2VDb250ZXh0XG4gICAgICAgIF07XG4gICAgfVxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGNyZWF0ZVNjb3BlXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovIGNvbnN0IGNyZWF0ZVNjb3BlID0gKCk9PntcbiAgICAgICAgY29uc3Qgc2NvcGVDb250ZXh0cyA9IGRlZmF1bHRDb250ZXh0cy5tYXAoKGRlZmF1bHRDb250ZXh0KT0+e1xuICAgICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi8gJDNia0FLJGNyZWF0ZUNvbnRleHQoZGVmYXVsdENvbnRleHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHVzZVNjb3BlKHNjb3BlKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0cyA9IChzY29wZSA9PT0gbnVsbCB8fCBzY29wZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2NvcGVbc2NvcGVOYW1lXSkgfHwgc2NvcGVDb250ZXh0cztcbiAgICAgICAgICAgIHJldHVybiAkM2JrQUskdXNlTWVtbygoKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgW2BfX3Njb3BlJHtzY29wZU5hbWV9YF06IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnNjb3BlLFxuICAgICAgICAgICAgICAgICAgICAgICAgW3Njb3BlTmFtZV06IGNvbnRleHRzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLCBbXG4gICAgICAgICAgICAgICAgc2NvcGUsXG4gICAgICAgICAgICAgICAgY29udGV4dHNcbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgY3JlYXRlU2NvcGUuc2NvcGVOYW1lID0gc2NvcGVOYW1lO1xuICAgIHJldHVybiBbXG4gICAgICAgICRjNTEyYzI3YWIwMmVmODk1JGV4cG9ydCRmZDQyZjUyZmQzYWUxMTA5LFxuICAgICAgICAkYzUxMmMyN2FiMDJlZjg5NSR2YXIkY29tcG9zZUNvbnRleHRTY29wZXMoY3JlYXRlU2NvcGUsIC4uLmNyZWF0ZUNvbnRleHRTY29wZURlcHMpXG4gICAgXTtcbn1cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGNvbXBvc2VDb250ZXh0U2NvcGVzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovIGZ1bmN0aW9uICRjNTEyYzI3YWIwMmVmODk1JHZhciRjb21wb3NlQ29udGV4dFNjb3BlcyguLi5zY29wZXMpIHtcbiAgICBjb25zdCBiYXNlU2NvcGUgPSBzY29wZXNbMF07XG4gICAgaWYgKHNjb3Blcy5sZW5ndGggPT09IDEpIHJldHVybiBiYXNlU2NvcGU7XG4gICAgY29uc3QgY3JlYXRlU2NvcGUxID0gKCk9PntcbiAgICAgICAgY29uc3Qgc2NvcGVIb29rcyA9IHNjb3Blcy5tYXAoKGNyZWF0ZVNjb3BlKT0+KHtcbiAgICAgICAgICAgICAgICB1c2VTY29wZTogY3JlYXRlU2NvcGUoKSxcbiAgICAgICAgICAgICAgICBzY29wZU5hbWU6IGNyZWF0ZVNjb3BlLnNjb3BlTmFtZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHVzZUNvbXBvc2VkU2NvcGVzKG92ZXJyaWRlU2NvcGVzKSB7XG4gICAgICAgICAgICBjb25zdCBuZXh0U2NvcGVzMSA9IHNjb3BlSG9va3MucmVkdWNlKChuZXh0U2NvcGVzLCB7IHVzZVNjb3BlOiB1c2VTY29wZSAsIHNjb3BlTmFtZTogc2NvcGVOYW1lICB9KT0+e1xuICAgICAgICAgICAgICAgIC8vIFdlIGFyZSBjYWxsaW5nIGEgaG9vayBpbnNpZGUgYSBjYWxsYmFjayB3aGljaCBSZWFjdCB3YXJucyBhZ2FpbnN0IHRvIGF2b2lkIGluY29uc2lzdGVudFxuICAgICAgICAgICAgICAgIC8vIHJlbmRlcnMsIGhvd2V2ZXIsIHNjb3BpbmcgZG9lc24ndCBoYXZlIHJlbmRlciBzaWRlIGVmZmVjdHMgc28gd2UgaWdub3JlIHRoZSBydWxlLlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjb3BlUHJvcHMgPSB1c2VTY29wZShvdmVycmlkZVNjb3Blcyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFNjb3BlID0gc2NvcGVQcm9wc1tgX19zY29wZSR7c2NvcGVOYW1lfWBdO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLm5leHRTY29wZXMsXG4gICAgICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRTY29wZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgICAgICByZXR1cm4gJDNia0FLJHVzZU1lbW8oKCk9Pih7XG4gICAgICAgICAgICAgICAgICAgIFtgX19zY29wZSR7YmFzZVNjb3BlLnNjb3BlTmFtZX1gXTogbmV4dFNjb3BlczFcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLCBbXG4gICAgICAgICAgICAgICAgbmV4dFNjb3BlczFcbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgY3JlYXRlU2NvcGUxLnNjb3BlTmFtZSA9IGJhc2VTY29wZS5zY29wZU5hbWU7XG4gICAgcmV0dXJuIGNyZWF0ZVNjb3BlMTtcbn1cblxuXG5cblxuZXhwb3J0IHskYzUxMmMyN2FiMDJlZjg5NSRleHBvcnQkZmQ0MmY1MmZkM2FlMTEwOSBhcyBjcmVhdGVDb250ZXh0LCAkYzUxMmMyN2FiMDJlZjg5NSRleHBvcnQkNTBjN2I0ZTlkOWYxOWMxIGFzIGNyZWF0ZUNvbnRleHRTY29wZX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@radix-ui+react-context@1.0.1_@types+react@18.3.12_react@18.3.1/node_modules/@radix-ui/react-context/dist/index.mjs\n");

/***/ })

};
;