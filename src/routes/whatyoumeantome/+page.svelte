<script>
    import { onMount, onDestroy } from 'svelte';

    // unix time epoch
    let unixEpoch = Date.now();
    let interval;

    // May 18, 2025, 14:24 in Guatemala (America/Guatemala timezone)
    const specialDate = new Date('2025-05-18T14:24:00-06:00');
    // May 27, 2025, 03:00 in Guatemala (America/Guatemala timezone)
    const coupleDate = new Date('2025-05-27T03:00:00-06:00');

    onMount(() => {
        interval = setInterval(() => {
            unixEpoch = Date.now();
        }, 100);
    });

    onDestroy(() => {
        if (interval) clearInterval(interval);
    });

    // gps
    const places = [
        {
            name: 'Colegio Nuevos Senderos',
            coordinates: '15.469121, -90.370815',
            link: 'https://www.google.com/maps/@15.469121,-90.370815,3a,75y,90t/data=!3m6!1e1!3m4!1s0!2e0!7i16384!8i8192'
        },
        {
            name: 'Nuestro primer beso',
            coordinates: '14.6017537,-90.4885644',
            link: 'https://www.google.com/maps/@14.6017537,-90.4885644,3a,75y,90t/data=!3m6!1e1!3m4!1s0!2e0!7i16384!8i8192'
        },
        {
            name: 'Lugar que no voy a nombrar pero que recuerdo con mucho cariño',
            coordinates: '14.6089649,-90.4866058',
            link: 'https://www.google.com/maps/@14.6089649,-90.4866058,3a,75y,90t/data=!3m6!1e1!3m4!1s0!2e0!7i16384!8i8192',
            note: 'FUCKING CAYALÁ'
        },
        {
            name: 'AMANO Casa',
            coordinates: '14.6089649,-90.4866058',
            link: 'https://www.google.com/maps/@14.6089649,-90.4866058,3a,75y,90t/data=!3m6!1e1!3m4!1s0!2e0!7i16384!8i8192',
            note: 'Te puse el centro historico por que las coordenadas de casa AMANO tienen una foto mal tomada hahaha'
        }
    ];

    // cryptogrpahy
    const key =
        '2025-05-18 ~ Cuando nos reencontramos ~ 2025-05-27 ~ Cuando confesamos lo que sentimos el uno por el otro ~ Andrea y Alan ~ Para toda la eternidad';

    async function hashMoment(text) {
        const data = new TextEncoder().encode(text);
        const hash = await crypto.subtle.digest('SHA-256', data);
        return [...new Uint8Array(hash)]
            .map((b) => b.toString(16).padStart(2, '0'))
            .join('');
    }

    // Hash comparison state
    let originalKey = key;
    let originalHash = '';
    let currentInput = key;
    let realtimeHash = '';
    let hashesMatch = false;

    // Compute original hash on mount
    onMount(async () => {
        originalHash = await hashMoment(originalKey);
        realtimeHash = originalHash;
        hashesMatch = true;
    });

    // Update realtime hash when input changes
    async function updateRealtimeHash() {
        realtimeHash = await hashMoment(currentInput);
        hashesMatch = realtimeHash === originalHash;
    }

    hashMoment('2024-01-01 | where we met | our names');
</script>

<main class="container mx-auto px-3">
    <h1 class="my-3 text-3xl font-bold">
        Te veo y pienso en ti en cada momento:
    </h1>
    <hr />
    <p class="my-3">
        Desde mi perspectiva, una de las muestras de amor más grandes que
        existen es poder compartir con las personas que amamos aquello que nos
        define como individuos: nuestros gustos, pasiones, intereses, metas e
        incluso nuestra profesión. Tú, Andrea, que eres una artista fenomenal y
        me maravillas con tu trabajo, me has impulsado a querer demostrarte, a
        través de la profesión que elegí, el amor que siento por ti, y cómo
        mediante las herramientas que uso día a día en mi trabajo, siempre te
        tengo presente.
    </p>
    <br />

    <br />

    <h2 class="text-2xl font-semibold">UNIX time epoch:</h2>
    <p>
        El tiempo Unix es una forma sencilla que usan las computadoras para
        medir el tiempo. En lugar de usar fechas normales como por ejemplo "14
        de febrero de 2026", las computadoras cuentan cuántos segundos han
        pasado desde el 1 de enero de 1970 a medianoche. Ese momento inicial se
        llama <strong>Unix Epoch</strong>. Cuando el contador estaba en 0, era
        el 1 de enero de 1970. Hoy el número es muchísimo más grande porque han
        pasado millones de segundos. En tiempo real se ve asi:
    </p>

    <div class="my-4 text-center">
        <span class="text-3xl font-bold">{unixEpoch}</span>
    </div>
    <p>
        Creo sabes a donde voy con esto.... el momento exacto en el que te volvi
        a reencontrar fue cuando te mande un mensaje un domingo 18 de mayo de
        2025 a las 14:24 CST, he sido muy feliz desde aquel instante y si lo
        queremos representar con el tiempo unix este tomaria el siguiente valor:
    </p>

    <div class="my-4 text-center">
        <span class="text-4xl font-bold italic">{specialDate.getTime()}</span>
    </div>

    <p>
        Y el momento mas especial de todos, cuando te pedi ser mi novia y me
        dijiste que si fue un 27 de mayo de 2025 alrededor de las 3:00 AM CST,
        el cual se ve representado asi:
    </p>

    <div class="my-4 text-center">
        <span class="text-4xl font-bold italic">{coupleDate.getTime()}</span>
    </div>
    <small
        >Estos numeros han quedado grabados para toda la eternidad y son
        testigos silenciosos de nuestra relación, gracias por todo, estoy muy
        feliz que hayan sucedido Andrea.</small
    >
    <h2 class="mt-3 text-2xl font-semibold">GPS Coordinates</h2>
    <p>
        Otro detalle que me encanta es que cada vez que pienso en ti, me vienen
        a la mente los lugares donde hemos compartido momentos especiales. Por
        ejemplo, el restuarante donde tuvimos nuestra primera cita, el colegio
        donde estudiamos juntos, donde tuvimos nuestro primer beso. Cada uno de
        esos lugares tiene unas coordenadas únicas que los identifican en el
        mundo. Me encanta pensar que aunque estemos en diferentes lugares,
        siempre podemos encontrar esos puntos en el mapa y recordar lo felices
        que somos cuando estamos juntos.
    </p>

    <div class="my-4">
        <ul class="my-3 list-inside list-disc">
            {#each places as place}
                <li>
                    <span>{place.name}</span>
                    <a
                        href={place.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-blue-500 transition hover:text-blue-800 hover:underline"
                        >{place.coordinates}</a
                    >
                    <br />
                    {#if place.note}
                        <small class="ml-5 italic">({place.note})</small>
                    {/if}
                </li>
            {/each}
            <li class="">
                <strong>DISCLAIMER:</strong> por temas de privacidad no puse mas
                ubicaciones, pero espero que podamos seguir visitando muchos mas
                lugares juntos y que cada uno de ellos quede grabado en mi memoria
                y en mi corazón.
            </li>
        </ul>
    </div>

    <h2 class="mt-3 text-2xl font-semibold">
        Criptografia (Algoritmo SHA-256)
    </h2>
    <p>
        SHA-256 es un algoritmo criptográfico que se usa para convertir
        información en un código llamado hash. Técnicamente, toma datos de
        cualquier tamaño y los procesa mediante operaciones matemáticas hasta
        producir un resultado de 256 bits, que se suele ver como una cadena
        larga de números y letras. Siempre genera el mismo resultado para la
        misma información, pero si el dato cambia aunque sea un poco, el hash
        cambia por completo. Además, es un proceso de una sola vía: es fácil
        generar el hash, pero prácticamente imposible reconstruir el contenido
        original a partir de él. Por eso se utiliza para verificar integridad de
        datos, seguridad y sistemas como las criptomonedas.
    </p>

    <div class="my-6 space-y-4">
        <div>
            <label class="mb-2 block text-sm font-semibold"
                >Original Unhashed Key:</label
            >
            <input
                type="text"
                bind:value={currentInput}
                on:input={updateRealtimeHash}
                class="w-full rounded border border-gray-300 p-2 font-mono text-sm"
                placeholder="Enter text to hash"
            />
        </div>

        <div>
            <label class="mb-2 block text-sm font-semibold"
                >Original Hash (SHA-256):</label
            >
            <input
                type="text"
                value={originalHash}
                readonly
                class="w-full rounded border border-gray-300 bg-gray-100 p-2 font-mono text-sm"
            />
        </div>

        <div>
            <label class="mb-2 block text-sm font-semibold"
                >Realtime Hash (from input above):</label
            >
            <input
                type="text"
                value={realtimeHash}
                readonly
                class="w-full rounded border p-2 font-mono text-sm transition-colors {hashesMatch
                    ? 'border-green-500 bg-green-50 text-green-700'
                    : 'border-red-500 bg-red-50 text-red-700'}"
            />
            <small
                class="mt-1 block {hashesMatch
                    ? 'text-green-600'
                    : 'text-red-600'}"
            >
                {hashesMatch ? '✓ Hash matches!' : '✗ Hash does not match'}
            </small>
        </div>
    </div>

    <p>
        ¿A qué voy con todo esto? A que, tal como funciona el algoritmo, así
        percibo nuestra relación: algo íntegro e inmutable que perdurará con el
        paso del tiempo. Si tan solo el más mínimo detalle hubiera sido
        diferente, no sería lo mismo. Y déjame decirte que me alegra
        profundamente que todo, hasta este punto, haya sido tan perfecto.
        Gracias por ser como eres, Andrea. Te amo y espero que podamos seguir
        creando momentos hermosos juntos por toda la eternidad.
    </p>
    <br />
    <hr />
    <p class="mt-3 mb-15 italic">
        Con mucho amor y cariño de Alan para Andrea ~ <strong>2026-02-14</strong
        >
    </p>
</main>
