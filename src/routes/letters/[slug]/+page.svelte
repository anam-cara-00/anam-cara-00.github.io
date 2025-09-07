<script>
	let open = false;
</script>

<main
	class="flex min-h-screen items-center justify-center bg-gradient-to-b from-sky-50 to-white p-8"
>
	<!-- ENVELOPE -->
	<div class="flex flex-col items-center">
		<div class="sway envelope relative" on:click={() => (open = !open)} class:open>
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
				class="h-50 w-85 rounded-b-xl bg-gradient-to-b from-[#f5e6d6] to-[#e6d0b0] shadow-lg"
			></section>
		</div>

		<small class="mt-5 text-[#5a5a5a] opacity-80"> Clickea el sobre para abrir la carta </small>
	</div>
</main>

<style>
	.triangle {
		filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2));
		transform-origin: top center; /* ✅ make flap rotate around top */
	}

	/* Sway animation */
	.sway {
		animation: swayUp 1.5s ease-in-out infinite alternate;
	}

	@keyframes swayUp {
		0% {
			transform: translateY(0px);
		}
		100% {
			transform: translateY(-12px);
		}
	}

	/* Open state rotates flap upward */
	.open .triangle {
		transform: rotateX(-180deg);
	}
</style>
