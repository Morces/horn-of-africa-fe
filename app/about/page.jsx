"use client";

import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "@/lib/contentful";
import { Users } from "lucide-react";

const About = () => {
	const team = [
		{
			name: "Dr. Sarah Kiptoo",
			title: "Executive Director",
			image: "https://via.placeholder.com/300x300/4F46E5/FFFFFF?text=SK",
		},
		{
			name: "James Kiprotich",
			title: "Program Manager",
			image: "https://via.placeholder.com/300x300/7C3AED/FFFFFF?text=JK",
		},
		{
			name: "Mary Wanjiku",
			title: "Finance Manager",
			image: "https://via.placeholder.com/300x300/DC2626/FFFFFF?text=MW",
		},
		{
			name: "Ahmed Hassan",
			title: "Field Coordinator",
			image: "https://via.placeholder.com/300x300/059669/FFFFFF?text=AH",
		},
		{
			name: "Grace Chebet",
			title: "Communications Officer",
			image: "https://via.placeholder.com/300x300/D97706/FFFFFF?text=GC",
		},
		{
			name: "Peter Lorot",
			title: "Research Analyst",
			image: "https://via.placeholder.com/300x300/0891B2/FFFFFF?text=PL",
		},
	];

	const [members, setMembers] = useState(team);

	useEffect(() => {
		getMembers();
	}, []);

	async function getMembers() {
		try {
			const res = await client.getEntries({
				content_type: "team",
				order: "fields.designationNo",
			});

			if (res.items && res.items.length > 0) {
				setMembers(res.items);
			} else {
				setMembers([]);
			}
		} catch (error) {
			console.error("Error fetching team members:", error);
			setMembers([]);
		}
	}

	return (
		<div className="min-h-screen">
			<main>
				{/* Hero Section */}
				<section className="bg-gradient-hero py-20">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<motion.div
							className="text-center"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
						>
							<h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
								About Horn of Africa Institute
							</h1>
							<p className="text-xl text-white/90 max-w-3xl mx-auto">
								Empowering pastoralist women and girls across the Horn of Africa
							</p>
						</motion.div>
					</div>
				</section>

				{/* Main Content */}
				<section className="py-16">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="grid lg:grid-cols-2 gap-12 items-center">
							<motion.div
								initial={{ opacity: 0, x: -50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8 }}
							>
								<h2 className="text-3xl font-bold mb-6">Our Story</h2>
								<div className="prose prose-lg max-w-none">
									<p className="text-muted-foreground mb-6">
										Founded in 2007, the Horn of Africa Institute (HAI)—formerly
										the Foundation for Pastoralist Women—is a national,
										women-led non-profit dedicated to the protection and
										empowerment of indigenous women and girls. We bridge the gap
										between evidence-based research and grassroots action,
										operating across Kenya’s Frontier Counties, including
										Isiolo, Turkana, Samburu, and Marsabit.
									</p>
									<p className="text-muted-foreground mb-6">
										Beyond direct programming, HAI provides specialized
										consultancy in research, baseline studies, and Monitoring
										and Evaluation (M&E) to ensure social interventions are
										data-driven and effective.
									</p>
									{/* <p className="text-muted-foreground">
										HAI aims at expanding its operational scope to regional
										level for purpose of experience and good practice sharing
										among pastoralist women in Ethiopia, Somalia, Eritrea,
										Uganda, South Sudan, Sudan and Djibouti (East and central
										Africa).
									</p> */}
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: 50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8, delay: 0.2 }}
							>
								<Image
									src="/assets/africa-map.jpg"
									alt="Horn of Africa Map"
									width={500}
									height={500}
									className="rounded-lg shadow-elegant w-full"
								/>
							</motion.div>
						</div>
					</div>
				</section>

				{/* Core Objectives */}
				<section className="py-16 bg-accent/30">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<motion.div
							className="text-center mb-12"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
						>
							<h2 className="text-3xl font-bold mb-4">Core Objectives</h2>
							<div className="flex flex-wrap justify-center gap-4 mb-8 text-lg font-semibold">
								<span className="text-primary">Protect Rights</span>
								<span className="text-muted-foreground">|</span>
								<span className="text-primary">Build Resilience</span>
								<span className="text-muted-foreground">|</span>
								<span className="text-primary">
									Create Linkages and Opportunities
								</span>
							</div>
						</motion.div>

						<div className="grid lg:grid-cols-3 gap-8">
							{[
								{
									number: "01",
									title: "Protect Rights",
									description:
										"Safeguard the fundamental rights of women and girls by implementing evidence-based knowledge programs, shaping policies and legislation that eliminate harmful practices, reduce gender-based violence, and guarantee",
								},
								{
									number: "02",
									title: "Build Resilience",
									description:
										"Strengthen the capacity of women, girls, and communities to withstand social, economic, and climate-related shocks through empowerment, education, and sustainable livelihoods.",
								},
								{
									number: "03",
									title: " Create Linkages and Opportunities",
									description:
										"Expand opportunities for women and girls by fostering economic empowerment, leadership development, access to resources, and strategic partnerships that open pathways for growth.",
								},
							].map((objective, index) => (
								<motion.div
									key={objective.number}
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: index * 0.2 }}
								>
									<Card className="h-full">
										<CardHeader>
											<div className="text-primary text-4xl font-bold mb-2">
												{objective.number}
											</div>
											<CardTitle className="text-xl">
												{objective.title}
											</CardTitle>
										</CardHeader>
										<CardContent>
											<p className="text-muted-foreground">
												{objective.description}
											</p>
										</CardContent>
									</Card>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* Team Section */}
				<section className="py-16">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<motion.div
							className="text-center mb-12"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
						>
							<h2 className="text-3xl font-bold mb-4">Our Team</h2>
							<p className="text-muted-foreground max-w-2xl mx-auto">
								Meet the dedicated professionals driving our mission forward
							</p>
						</motion.div>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{members?.map((member, index) => {
								const photoUrl = member?.fields?.image?.fields?.file?.url;
								return (
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ delay: index * 0.1 }}
										className="bg-card rounded-2xl border border-border hover:shadow-lg transition-all group"
									>
										<div className="relative w-full aspect-square overflow-hidden rounded-t-2xl bg-muted">
											{photoUrl ? (
												<img
													src={`https:${photoUrl}`}
													alt={member?.fields?.fullName || "Team member"}
													className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
												/>
											) : (
												<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
													<Users className="w-16 h-16 text-muted-foreground" />
												</div>
											)}
										</div>
										<div className="flex flex-col p-4">
											<h3 className="text-xl font-bold mb-2">
												{member?.fields?.fullName}
											</h3>
											<p className="text-muted-foreground">
												{member?.fields?.designation}
											</p>
										</div>
									</motion.div>
								);
							})}
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default About;
