# Cotización Fucsia Fucsia × Celeste

- [x] Trasladar el contenido comercial aprobado a una experiencia web.
- [x] Mantener el valor del skill y el placeholder del paquete sin inventar datos.
- [x] Crear navegación, experiencia interactiva, inversión y siguiente paso.
- [x] Validar estructura responsive, contenido, health check y reduced motion.
- [x] Publicar en GitHub y Dokploy.
- [x] Confirmar página y `/health` en producción.

## Revisión

- Repositorio: `silvanasolvers/cotizacion-fucsia-fucsia`.
- Dokploy COTIZACIONES: applicationId `Rpk77AH2J21b1lr8zKy8I`; despliegue inicial `tqT6Qad7EB3BgGct8klh0` en estado `done`.
- Producción: `https://cotizacion-fucsia-fucsia.solversai.cloud/` y `/health` responden HTTP 200.
- Vista pública comprobada en 1440 × 900 y 390 × 844, sin overflow horizontal; interacción de ejemplos validada.

## Corrección comercial — dos módulos independientes (2026-08-12)

- [x] Confirmar que Mensajería y Gestión contable/documental son propuestas independientes, conectadas al Celeste existente.
- [x] Reestructurar la propuesta para mostrar inversión, alcance y condiciones de cada módulo sin mezclarlos.
- [x] Hacer explícito el consumo de mensajería de `$79 COP` por envío, aparte de su habilitación única.
- [x] Destacar la condición de gestión mensual de Gestión contable/documental: `+$200.000 COP/mes` únicamente con Fase 2 activa y renegociación si esta se suspende.
- [x] Validar contenido, enlaces y comportamiento responsive; publicar la corrección en Dokploy.

### Revisión

- La página distingue visual y comercialmente los dos módulos: Mensajería (`$1.500.000 COP` de habilitación + `$79 COP` por envío) y Gestión contable/documental (`$1.850.000 COP` de habilitación).
- La condición mensual de Gestión contable/documental tiene una sección propia: `+$200.000 COP/mes` mientras Fase 2 esté activa; si esta se suspende, la operación, soporte y gestión del módulo se renegocian según el alcance vigente.
- Validación: `npm run check`, `git diff --check`, health local y producción HTTP 200; revisión visual pública en 1440 × 900 y 390 × 844. Se corrigió el ajuste de línea del titular móvil antes del cierre.
- Publicación: commits `15fd92a` y `1111641`; despliegue automático Dokploy `lGO7IN3q8QLvVfdlbTAak` en estado `done`.
