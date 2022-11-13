<template>
	<section class="newsletter">
		<div class="newsletter-box">
			<header>
				<p>
					Subscribe to our Newsletter and get the
					latest updates
				</p>
				<small
					>Lorem ipsum dolor sit amet consectetur.
					Sem. Lorem ipsum dolor sit amet
					consectetur. Sem.</small
				>
			</header>
			<form action="">
				<input
					type="email"
					name=""
					placeholder="Get up to date with web3"
					id=""
				/>
				<button
					id="submit-button"
					class=""
					type="submit"
				>
					Subscribe
				</button>
			</form>
		</div>
	</section>
</template>

<script setup></script>

<style lang="scss">
	@import "src/assets/scss/config.scss";

	.newsletter {
		padding: $section-spacing;
		height: 50vh;
		box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);

		&-box {
			background: linear-gradient(
				268.7deg,
				#0d1018 0.45%,
				#6c6579 120.69%
			);
			height: 100%;
			border-radius: 20px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 1.5% 10% 0 2.5%;

			header {
				text-align: left;
				color: #f5f5f5;

				p {
					font-size: $text-size-medium * 2.2;
					font-weight: 600;
				}

				small {
					font-size: $text-size-medium * 0.75;
				}

				#submit-button {
					background: transparent;
				}
			}

			form {
				flex-basis: 60%;
				width: 89%;
				display: flex;
				align-items: center;
				justify-content: center;

				position: relative;
				input {
					width: 70%;
					background: none;
					border: 1px solid $secondary-color;
					height: 40%;
					border-top-left-radius: 20px;
					border-bottom-left-radius: 20px;
				}
				input::placeholder {
                    width: 30%;
                    
                    padding: 0 35%;
				}
				input:focus{
					color: $color;
					padding: 0 0 0 2%;
					outline: none;
				}

				button {
					width: 30%;
					background: none;

					height: 40%;
					background-color: $secondary-color;
					border-top-right-radius: 20px;
					border-bottom-right-radius: 20px;
					border: none;
				}
			}
			//  button::after{
			//         content: '';
			//         height: 70%;
			//         width: 10px;
			//         background: linear-gradient(268.7deg, #0D1018 0.45%, #6C6579 120.69%);;
			//         border: 1px solid $secondary-color;
			//         position: absolute;
			//         display: block;
			//         top: -10%;
			//         transform: rotate(45deg);
			//     }
		}
	}

	@import "src/assets/scss/responsive.scss";
</style>
