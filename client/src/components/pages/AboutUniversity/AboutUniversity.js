import React from "react";
import Header from "../../common/Header/Header";
import {
	Card,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
} from "@material-ui/core";
import "./AboutUniversity.css";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

export const AboutUniversity = () => {
	return (
		<div className="home">
			<Header />
			<div className="container" id="aboutContainer">
				<Grid container justify="center">
					<Grid item xs={10}>
						<Card variant="outlined">
							<Grid
								container
								justify="center"
								alignItems="flex-start"
								className="p-3 ">
								<Grid item xs={8} md={4}>
									<Grid
										container
										justify="center"
										alignContent="center">
										<CardMedia
											component="img"
											style={{ maxWidth: "150px" }}
											image="dsu_logo.jfif"
											label={"Logo"}
										/>
									</Grid>
								</Grid>
								<Grid item xs={12} md={12}>
									<Grid container justify="center">
										<CardContent className="text-center">
											<Typography
												gutterBottom
												variant="h3"
												component="h2">
												{"Dayananda Sagar University"}
											</Typography>
											<Typography
												gutterBottom
												variant="subtitle1">
												<a
													href="http://www.dsu.edu.in/"
													target="_blank"
													rel="noreferrer noopener">
													{
														"Official University Website"
													}
													<OpenInNewIcon fontSize="small" />
												</a>
											</Typography>
										</CardContent>
									</Grid>
								</Grid>
							</Grid>
						</Card>
					</Grid>
				</Grid>
				<Grid container justify="center" className="my-3">
					<Grid item xs={10}>
						<Card variant="outlined">
							<Container className="px-5 py-4">
								<Typography
									variant="h4"
									className="text-center pb-3">
									About University
								</Typography>

								<br />

								<br />
								<Typography variant="body2">
									{
										"Dayananda Sagar University is a private university established in 2014. It is located in Bangalore, Karnataka. The university is ranked 4th among new universities by Karnataka Rating Framework (KSURF) and top ranked in International Collegiate Programming Contest (ICPC) India Regional Finals."
									}
								</Typography>
								<br />
								<Typography variant="body2">
									{
										"In 2019, DSU was top-ranked in International Collegiate Programming Contest (ICPC) India Regional Finals at Kolkata"
									}
								</Typography>
								<br />
								<Typography variant="body2">
									{
										"In 2019, DSU was ranked 4th among the new universities by Karnataka Rating Framework (KSURF)"
									}
								</Typography>
								<br />
								<Typography variant="body2">
									{
										"Dayananda Sagar University offers admission to candidates on the basis of merit or an entrance examination."
									}
								</Typography>
								<br />
								<Typography variant="body2">
									{
										"The university provides many great recruitment opportunities to its students. The top recruiters are TATA, Cognizant, Microsoft, L&T Construction, Dell, Infosys, Cisco and many more. In its most recent on-campus placement drive, 245 students received placement offers from top companies."
									}
								</Typography>
								<br />
								<Typography variant="body2">
									{
										"DSU has a  faculty that consists of well-trained and highly qualified teachers and lecturers who emphasize on both study and overall development of the students. The faculty members hold the following positions:"
									}
								</Typography>
								<br />
								<Typography variant="body2">
									{
										"Dayananda Sagar University is recognized by University Grants Commission (UGC) and provides the quality education from pre-university to postgraduate and doctoral programmes in main streams like Engineering, Basic & Applied Sciences, Commerce & Management, Health Sciences and Arts & Humanities the Bachelors, Masters and Ph.D. levels."
									}
								</Typography>
								<br />
								<Typography variant="body2">
									{
										"The placement record of the university has been decent, with an average placement of 6 lakhs and highest placement of 28 lakhs. Accenture, Cognizant, Cipla, Bosch, Oracle, ITL, TATA Wipro are some of its notable recruiters"
									}
								</Typography>
							</Container>
						</Card>
					</Grid>
				</Grid>
			</div>
		</div>
	);
};
