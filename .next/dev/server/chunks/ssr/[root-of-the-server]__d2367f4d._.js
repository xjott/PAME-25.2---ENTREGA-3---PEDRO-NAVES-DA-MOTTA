module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Desktop/ENTREGA3/site/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/ENTREGA3/site/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/ENTREGA3/site/components/EventCard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/Desktop/ENTREGA3/site/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ENTREGA3/site/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$components$2f$EventCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ENTREGA3/site/components/EventCard.tsx [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../lib/eventos'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
function HomePage() {
    var destaques = eventos.filter((evento)=>evento.destaque); // filtrar eventos destaque da array de eventos e listar os próximos da array de eventos
    var proximosEventos = eventos.slice(0, 4);
    // fazer o container 
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "header",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "titulo",
                children: "Página inicial"
            }, void 0, false, {
                fileName: "[project]/Desktop/ENTREGA3/site/app/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Compra e Venda de ingressos digitais"
            }, void 0, false, {
                fileName: "[project]/Desktop/ENTREGA3/site/app/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "banner",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bannerTexto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "destacado",
                            children: "Destaque da semana"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/ENTREGA3/site/app/page.tsx",
                            lineNumber: 23,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tituloDoBanner",
                            children: "Experiências imersivas no salão"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/ENTREGA3/site/app/page.tsx",
                            lineNumber: 24,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "descricao",
                            children: "Shows e festivais com visual e som inesquecíveis. Ingressos digitais."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/ENTREGA3/site/app/page.tsx",
                            lineNumber: 25,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/ENTREGA3/site/app/page.tsx",
                    lineNumber: 22,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/ENTREGA3/site/app/page.tsx",
                lineNumber: 21,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "destaqueSemana",
                children: "Destaques da semana"
            }, void 0, false, {
                fileName: "[project]/Desktop/ENTREGA3/site/app/page.tsx",
                lineNumber: 30,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-3",
                children: destaques.map((evento)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$components$2f$EventCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        evento: evento
                    }, evento.id, false, {
                        fileName: "[project]/Desktop/ENTREGA3/site/app/page.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/ENTREGA3/site/app/page.tsx",
                lineNumber: 31,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "proximosEventos",
                children: "Próximos eventos"
            }, void 0, false, {
                fileName: "[project]/Desktop/ENTREGA3/site/app/page.tsx",
                lineNumber: 39,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "barraScroll",
                children: proximosEventos.map((evento)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$components$2f$EventCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        evento: evento
                    }, evento.id, false, {
                        fileName: "[project]/Desktop/ENTREGA3/site/app/page.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/ENTREGA3/site/app/page.tsx",
                lineNumber: 40,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "rodape",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "contato",
                        children: "Contato & Localização"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/ENTREGA3/site/app/page.tsx",
                        lineNumber: 49,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "exemplo",
                        children: "Rua das Experiências, 123 — Centro • (21) 99999-9999 • contato@eventos.com"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/ENTREGA3/site/app/page.tsx",
                        lineNumber: 52,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/ENTREGA3/site/app/page.tsx",
                lineNumber: 48,
                columnNumber: 3
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/ENTREGA3/site/app/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
} // fechei a home, fazer as outras partes
}),
"[project]/Desktop/ENTREGA3/site/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/ENTREGA3/site/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d2367f4d._.js.map