module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Desktop/ENTREGA3/site/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/ENTREGA3/site/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/ENTREGA3/site/app/lib/eventos.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buscarEventoPorId",
    ()=>buscarEventoPorId,
    "default",
    ()=>__TURBOPACK__default__export__,
    "destaquesDaSemana",
    ()=>destaquesDaSemana,
    "proximosEventos",
    ()=>proximosEventos
]);
const eventos = [
    {
        id: "festival cristina",
        titulo: "Cristina Festival",
        imagem: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1400&q=80",
        data: "2026-02-10",
        horario: "22:00",
        precoInicial: 120,
        classificacao: "18+",
        sinopse: "Uma noite imersiva com luzes, palco 360°, e um line-up focado em sets intensos. Experiencia audiovisual pensada para o salao.",
        destaque: true
    },
    {
        id: "cristina-live",
        titulo: "Cristina Live Experience",
        imagem: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1400&q=80",
        data: "2026-02-14",
        horario: "20:30",
        precoInicial: 90,
        classificacao: "16+",
        sinopse: "Show principal com performance imersiva e cenografia sincronizada. Entradas digitais integradas a catracas inteligentes.",
        destaque: true
    },
    {
        id: "cristina-spe",
        titulo: "Cristina Special",
        imagem: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1400&q=80",
        data: "2026-02-21",
        horario: "23:30",
        precoInicial: 60,
        classificacao: "18+",
        sinopse: "Pista aberta, bass e house, com visual minimalista e laser controlado por bpm. Evento ideal para testar a experiencia do espaco."
    },
    {
        id: "sunset-session",
        titulo: "Sunset Session",
        imagem: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=80",
        data: "2026-03-01",
        horario: "18:00",
        precoInicial: 50,
        classificacao: "Livre",
        sinopse: "Fim de tarde com musica, bar e clima leve. Um formato de evento mais curto, focado em convivencia e ambientacao."
    }
];
const __TURBOPACK__default__export__ = eventos;
function buscarEventoPorId(id) {
    return eventos.find((evento)=>evento.id === id);
}
function destaquesDaSemana() {
    return eventos.filter((evento)=>evento.destaque);
}
function proximosEventos(limit) {
    return [
        ...eventos
    ].slice(0, limit);
}
}),
"[project]/Desktop/ENTREGA3/site/app/eventos/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DetalhesEventoPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ENTREGA3/site/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/ENTREGA3/site/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ENTREGA3/site/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$app$2f$lib$2f$eventos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/ENTREGA3/site/app/lib/eventos.ts [app-rsc] (ecmascript)");
;
;
;
function DetalhesEventoPage({ params }) {
    const evento = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$app$2f$lib$2f$eventos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buscarEventoPorId"])(params.id);
    if (!evento) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "pageHeader",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "pageTitle",
                        children: evento.titulo
                    }, void 0, false, {
                        fileName: "[project]/Desktop/ENTREGA3/site/app/eventos/[id]/page.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "pageSubtitle",
                        children: [
                            evento.data,
                            " • ",
                            evento.horario,
                            " • a partir de R$ ",
                            evento.precoInicial
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/ENTREGA3/site/app/eventos/[id]/page.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/ENTREGA3/site/app/eventos/[id]/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "detailsHero",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: "detailsImage",
                            src: evento.imagem,
                            alt: evento.titulo
                        }, void 0, false, {
                            fileName: "[project]/Desktop/ENTREGA3/site/app/eventos/[id]/page.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "detailsPanel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pill",
                                    children: [
                                        "Classificacao: ",
                                        evento.classificacao
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/ENTREGA3/site/app/eventos/[id]/page.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "sectionTitle",
                                    children: "Sinopse"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/ENTREGA3/site/app/eventos/[id]/page.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text",
                                    children: evento.sinopse
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/ENTREGA3/site/app/eventos/[id]/page.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "cardActions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btnPrimary",
                                            type: "button",
                                            disabled: true,
                                            children: "Comprar Ingresso (visual)"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/ENTREGA3/site/app/eventos/[id]/page.tsx",
                                            lineNumber: 31,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn",
                                            type: "button",
                                            disabled: true,
                                            children: "Favoritar (visual)"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/ENTREGA3/site/app/eventos/[id]/page.tsx",
                                            lineNumber: 34,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/ENTREGA3/site/app/eventos/[id]/page.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$ENTREGA3$2f$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "smallMuted",
                                    children: "*Compra real nao implementada (frontend demonstrativo)."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/ENTREGA3/site/app/eventos/[id]/page.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/ENTREGA3/site/app/eventos/[id]/page.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/ENTREGA3/site/app/eventos/[id]/page.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/ENTREGA3/site/app/eventos/[id]/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/ENTREGA3/site/app/eventos/[id]/page.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/ENTREGA3/site/app/eventos/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/ENTREGA3/site/app/eventos/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__48a8ab93._.js.map