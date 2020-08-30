import { useState } from "react";
import Head from "next/head";

export default () => {
	const [textColor, setTextColor] = useState("black");
	return (
		<div className="main">
			<Head>
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=[Tracking ID]"
				/>

				<script
					dangerouslySetInnerHTML={{
						__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GTM-T9FTQ97');
        `,
					}}
				/>
				<title>Siah Project</title>
				<link
					href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<div className="container">
				<div
					className="titleContainer"
					onClick={() =>
						textColor === "black"
							? setTextColor("white")
							: setTextColor("black")
					}
				>
					<h1 className="title">Siah</h1>
					<h1 className="title">Project</h1>
				</div>
			</div>

			<style jsx>{`
				.main {
					height: 100vh;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.container {
					width: 90%;
					height: 90%;
					border: 7px solid white;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.titleContainer {
				}
				.title {
					font-size: 6rem;
					color: ${textColor};
					padding: 0px;
					margin: 0px;
					line-height: 0.8;
					user-select: none;
					cursor: pointer;
					transition: color 1s ease-in;
				}
			`}</style>
			<style jsx global>{`
				html,
				body {
					min-height: 100vh;
					background-color: #000;
					margin: 0;
					padding: 0;
				}
				* {
					box-sizing: border-box;
					font-family: "Bebas Neue", cursive;
				}
			`}</style>
		</div>
	);
};
