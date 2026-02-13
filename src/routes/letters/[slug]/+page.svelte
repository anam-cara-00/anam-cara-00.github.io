<script>
    export let data;
    let open = false;
</script>

<main
    class="flex min-h-screen items-center justify-center bg-gradient-to-b from-sky-50 to-white p-8"
>
    <!-- ENVELOPE -->
    <div class="flex flex-col items-center">
        <div
            class="sway envelope relative"
            on:click={() => (open = !open)}
            class:open
            role="button"
            tabindex="0"
        >
            <!-- ACTUAL LETTER -->
            <section
                class="letter no-scrollbar absolute h-120 overflow-y-auto rounded-xl bg-gradient-to-b from-[#fffef6] to-[#fff9e7] shadow-sm transition-all duration-700 ease-in-out"
                class:open-letter={open}
            >
                <div class="p-6">
                    <h2 class="text-right italic">{data.date}</h2>
                    <h1 class="text-center font-bold">{data.title}{data.emoji}</h1>
                    <h2 class="font-bold text-[#7b6a50]">Andrea:</h2>
                    <p class="whitespace-pre-wrap">{data.content}</p>
                </div>
            </section>

            <!-- Flap -->
            <svg
                class="triangle absolute top-0 left-0 h-24 w-85 origin-top transition-transform duration-700 ease-in-out"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="flapGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#faeed8" />
                        <stop offset="100%" stop-color="#fffbef" />
                    </linearGradient>
                </defs>
                <polygon points="0,0 100,0 50,100" fill="url(#flapGradient)" />
            </svg>

            <!-- Envelope body -->
            <section
                class="h-50 w-85 rounded-b-xl bg-gradient-to-b from-[#f5e6d6] to-[#ceba9e] shadow-lg"
            ></section>

            <small class="mt-5 text-center text-[#5a5a5a] opacity-80 select-none">
                Clickea el sobre para abrir la carta
            </small>
        </div>
    </div>
</main>

<style>
    .triangle {
        filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2));
        transform-origin: top center;
    }

    /* Sway animation */
    .sway {
        animation: swayUp 2.5s ease-in-out infinite alternate;
    }

    @keyframes swayUp {
        0% {
            transform: translateY(0px);
        }
        100% {
            transform: translateY(-12px);
        }
    }

    /* Flap opens */
    .open .triangle {
        transform: rotateX(-180deg);
    }

    /* Letter styles */
    .letter {
        opacity: 0;
        transform: scale(0.5) translateY(20px);
        pointer-events: none;
        z-index: 20;
    }

    .open-letter {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        margin: auto;
        opacity: 1;
        transform: scale(1.08) translateY(-120px);
        pointer-events: auto;
    }
</style>
