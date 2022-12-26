import { PrismicRichText } from "@prismicio/react"
import Link from "next/link"
import React from "react"
import { FaFacebook, FaInstagram, FaYelp } from "react-icons/fa"
import SectionWrapper from "../components/SectionWrapper"

const Footer = ({ pageData }) => {
	console.log(pageData)

	return (
		<footer className="bg-black">
			<SectionWrapper className="relative px-4 pt-12 pb-4 text-white xl:px-0">
				<div className="flex sm:gap-4 sm:items-center md:justify-center">
					<hr className="hidden w-1/3 h-0.5 bg-gold sm:block" />
					<div className="flex flex-col items-center md:text-center">
						<h5 className="text-3xl font-bold uppercase md:text-2xl text-gold font-title ">
							{pageData.footer_title}
						</h5>
						<span className="text-gold font-title ">
							{pageData.footer_subtitle}
						</span>
					</div>
					<hr className="hidden w-1/3 h-0.5 bg-gold sm:block" />
				</div>
				<div className="flex flex-col gap-8 my-12 md:flex-row md:justify-between">
					<div>
						<h5 className="py-2 text-xl"> {pageData.footer_title}</h5>
						<ul>
							<li>
								Phone Number:
								<PrismicRichText
									field={pageData.phone_number}
									components={{
										hyperlink: ({ children, node }) => {
											return (
												<a href={node.data.url} className="underline w-fit">
													{children}
												</a>
											)
										},
									}}
								/>
							</li>
							<li>Business hours: {pageData.business_hours}</li>
							<li>
								Email:{" "}
								<PrismicRichText
									field={pageData.email}
									components={{
										hyperlink: ({ children, node }) => {
											return (
												<a href={node.data.url} className="underline w-fit">
													{children}
												</a>
											)
										},
									}}
								/>
							</li>
						</ul>
						<div className="flex gap-2 mt-8 md:gap-4">
							{pageData.instagram_link?.url && (
								<a
									href={pageData.instagram_link?.url}
									target="_blank"
									rel="noreferrer noopener"
								>
									<FaInstagram size={30} color="white" />
								</a>
							)}

							{pageData.facebook_link?.url && (
								<a
									href={pageData.facebook_link?.url}
									target="_blank"
									rel="noreferrer noopener"
								>
									<FaFacebook size={30} color="white" />
								</a>
							)}

							{pageData.yelp_link?.url && (
								<a
									href={pageData.yelp_link?.url}
									target="_blank"
									rel="noreferrer noopener"
								>
									<FaYelp size={30} color="white" />
								</a>
							)}
						</div>
					</div>
					<div>
						<h5 className="py-2 text-xl">Quicklinks</h5>
						<ul className="underline w-fit">
							<li>
								<Link href="#about-us">About us</Link>
							</li>
							<li>
								<Link href="#services">Services</Link>
							</li>
							<li>
								<Link href="#pricesheet">Price sheet</Link>
							</li>
							<li>
								<Link href="#testimonials">Testimonials</Link>
							</li>
							<li>
								<Link href="#contact-us">Get a quote</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="text-sm text-center text-white/80">
					{pageData.footer_text}
				</div>
			</SectionWrapper>
		</footer>
	)
}

export default Footer
