<script>
	import { onMount, onDestroy } from 'svelte';
	let open = false;
	let wrap;
	let btn;

	function toggle() {
		open = !open;
	}
	function onKeydown(e) {
		if (e.code === 'Enter' || e.code === 'Space') {
			e.preventDefault();
			toggle();
		}
	}
	function onDocClick(e) {
		if (!wrap.contains(e.target) && open) {
			open = false;
		}
	}
	// onMount(() => document.addEventListener('click', onDocClick));
	// onDestroy(() => document.removeEventListener('click', onDocClick));
</script>

<main
	class="flex min-h-screen items-center justify-center bg-gradient-to-b from-sky-50 to-white p-8"
>
	<div bind:this={wrap} class="mx-auto w-full max-w-xs">
		<button
			bind:this={btn}
			class="w-full cursor-pointer rounded-lg border-0 bg-transparent p-0 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
			aria-expanded={open}
			aria-controls="letter"
			title="Open the letter (Enter / Space)"
			on:click={toggle}
			on:keydown={onKeydown}
		>
			<div class={`transform-style-3d relative h-56 w-full ${open ? 'env-open' : ''}`}>
				<!-- flap -->
				<div class="env-flap absolute top-0 right-0 left-0 z-20 h-28">
					<div class="pointer-events-none flex h-full w-full items-start justify-center">
						<div class="relative">
							<div
								class="absolute -top-1 left-1/2 -translate-x-1/2 transform"
								style="width:0;height:0;border-left:10rem solid transparent;border-right:10rem solid transparent;border-bottom:7rem solid var(--paper);border-radius:8px;filter: drop-shadow(0 8px 18px rgba(0,0,0,.08));"
							></div>
							<div
								class="absolute top-3 left-1/2 -translate-x-1/2 transform"
								style="width:92%;height:3.5rem;background:linear-gradient(180deg,var(--paper),#fff1d9);border-radius:8px;box-shadow:inset 0 -6px 16px rgba(0,0,0,.03);"
							></div>
						</div>
					</div>
				</div>

				<!-- body -->
				<div
					class="absolute right-0 bottom-0 left-0 h-40 rounded-xl"
					style="background:linear-gradient(180deg,var(--env),#f1d9b8);box-shadow:var(--shadow);"
				>
					<!-- letter -->
					<article
						id="letter"
						class="letter absolute top-10 left-1/2 z-10 flex h-36 w-11/12 -translate-x-1/2 transform flex-col gap-2 rounded-lg bg-[color:var(--paper)] p-4 shadow-lg"
						aria-hidden={!open}
						style="transform: translateY({open ? '-28px' : '40px'});"
					>
						<div class="text-xs font-semibold text-[#7b6a50]">To: You</div>
						<div
							class="flex flex-1 items-center justify-center px-2 text-center text-sm leading-6 text-[color:var(--ink)]"
						>
							<p>
								Hello! 🌼<br /><br />This is your letter inside a cute Svelte + Tailwind envelope.
							</p>
						</div>
					</article>

					<!-- seal -->
					<div
						class="absolute -top-6 left-1/2 grid h-14 w-14 -translate-x-1/2 transform place-items-center rounded-full text-lg font-bold text-[#6b3a00]"
						style="background:radial-gradient(circle at 30% 30%, #fff6e6, var(--accent));box-shadow:0 6px 18px rgba(0,0,0,.12),inset 0 -6px 14px rgba(0,0,0,.04);border:2px solid rgba(0,0,0,.04);"
					>
						💌
					</div>
				</div>
			</div>
		</button>

		<div class="mt-3 text-center text-sm text-gray-600">
			{open ? 'Click again to close' : 'Click the envelope to open the letter'}
		</div>
	</div>
</main>

<style>
	:global(:root) {
		--paper: #fffef6;
		--env: #f7e9d9;
		--accent: #ffd36b;
		--ink: #2b2b2b;
		--shadow: 0 14px 30px rgba(9, 10, 11, 0.12), 0 6px 14px rgba(9, 10, 11, 0.06);
	}
	.env-flap {
		transform-origin: top center;
		transition: transform 550ms cubic-bezier(0.2, 0.9, 0.28, 1);
		pointer-events: none;
	}
	.env-open .env-flap {
		transform: rotateX(-170deg);
	}
	.letter {
		transition:
			transform 520ms cubic-bezier(0.22, 0.9, 0.28, 1),
			box-shadow 260ms;
	}
	.env-open .letter {
		transform: translateY(-28px);
		box-shadow: 0 36px 60px rgba(10, 10, 10, 0.18);
	}
</style>
