import React from "react";
import {
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import resume from "./assets/Ajit_Pal_Formatted_CV.pdf";

// ...all your imports stay the same

// Your imports remain unchanged...

const Portfolio = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        py: { xs: 3, md: 4 },
        px: { xs: 2, md: 4 },
        background: "linear-gradient(135deg, #f0f5f9, #f9f9f9)",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      {/* Profile Image */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <img
          src={require("./assets/c9e06d35-838b-425e-863d-542b2aa0d3e8.jpg")}
          alt="Profile"
          style={{
            width: 150,
            height: 150,
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
          }}
        />
      </Box>

      {/* Header */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold", letterSpacing: 2 }}
        >
          AJIT PAL
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
          Full Stack Developer
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
            mt: 2,
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            href="https://www.linkedin.com/in/ajit-pal-513043350/"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<LinkedInIcon />}
          >
            LinkedIn
          </Button>
          <Button
            variant="outlined"
            color="primary"
            href="https://github.com/ajitpal254"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<GitHubIcon />}
          >
            GitHub
          </Button>
        </Box>
      </Box>

      <Grid container spacing={4}>
        {/* Summary */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom sx={sectionTitleStyle}>
            Summary
          </Typography>
          <Card elevation={3} sx={cardHover}>
            <CardContent>
              <Typography variant="body1" color="text.secondary">
                Highly motivated Full-Stack Developer with 3+ years of
                experience designing, developing, and implementing innovative
                software solutions. Proven ability to collaborate effectively in
                agile environments to deliver high-quality projects on time and
                within budget. Expertise in e-commerce platforms, retail
                applications, and financial systems.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Technical Skills */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom sx={sectionTitleStyle}>
            Technical Skills
          </Typography>
          <Card elevation={3} sx={cardHover}>
            <CardContent>
              <List>
                {[
                  {
                    primary: "Expertise Area",
                    secondary:
                      "Web Applications, Java Microservices Applications, REST APIs, Agile Methodology",
                  },
                  {
                    primary: "Languages",
                    secondary:
                      "Java, JavaScript, Angular, React, HTML, CSS, Node.js",
                  },
                  {
                    primary: "Database",
                    secondary:
                      "MySQL, Oracle, MongoDB, Firebase, DBeaver, MSSQL",
                  },
                  {
                    primary: "Version Control / Project Management",
                    secondary: "GitLab, Git, Jira, Bitbucket, Jenkins",
                  },
                  {
                    primary: "Testing",
                    secondary: "Postman, SoapUI, REST API",
                  },
                  {
                    primary: "Skills Attained",
                    secondary:
                      "Docker, Spring Boot, Microservices, Maven, Kafka, AWS",
                  },
                ].map(({ primary, secondary }, idx) => (
                  <ListItem key={idx}>
                    <ListItemText
                      primary={primary}
                      secondary={secondary}
                      primaryTypographyProps={{ fontWeight: "bold" }}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Experience */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom sx={sectionTitleStyle}>
            Experience
          </Typography>
          <Grid container spacing={2}>
            {/* BMO */}
            <Grid item xs={12}>
              <Card elevation={3} sx={cardHover}>
                <CardContent>
                  <Typography variant="h6">Full Stack Developer</Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    BMO – Capitex Project | April 2025 – Present
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText primary="Building stock-based financial services using Java 17 and microservices architecture." />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Implemented Kafka for real-time event streaming and asynchronous communication." />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Integrated AWS cloud services to manage infrastructure and deployments." />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Used MSSQL for data storage related to trading and transactions." />
                    </ListItem>
                  </List>
                  <Typography variant="body2" color="text.secondary">
                    Tech Stack: Java 17, Kafka, AWS, MSSQL
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Walmart Canada */}
            <Grid item xs={12}>
              <Card elevation={3} sx={cardHover}>
                <CardContent>
                  <Typography variant="h6">Software Developer</Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    Walmart Canada | Aug 2023 – Feb 2024
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText primary="Integrated new search and filtering features using Java and Spring Boot." />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Implemented RESTful APIs for e-commerce cart and checkout workflows." />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Contributed to improving application performance and reducing API response time." />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>

            {/* Meson Technologies */}
            <Grid item xs={12}>
              <Card elevation={3} sx={cardHover}>
                <CardContent>
                  <Typography variant="h6">Software Engineer</Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    Meson Technologies | Jan 2021 – June 2023
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText primary="Developed microservice-based applications for retail clients using Spring Boot and React." />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Led the implementation of CI/CD pipelines using Jenkins and Docker." />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Worked closely with QA and business teams to ensure timely delivery." />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Projects */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom sx={sectionTitleStyle}>
            Projects
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Card elevation={3} sx={cardHover}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    3Amshopp – Multi-Vendor Marketplace
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText primary="Built a scalable React-based front-end for a Canadian multi-vendor e-commerce platform." />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Integrated Firebase for authentication and cloud storage." />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Deployed frontend on Netlify and backend (Node.js APIs) on Render for production use." />
                    </ListItem>
                  </List>
                  <Button
                    variant="outlined"
                    color="primary"
                    href="https://3amshoppme.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ mt: 1 }}
                  >
                    View Project
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Education */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom sx={sectionTitleStyle}>
            Education
          </Typography>
          <Card elevation={3} sx={cardHover}>
            <CardContent>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Mobile Application Design and Development, Post Graduate Certificate"
                    secondary="Lambton College, Toronto | Jan 2020 - Aug 2021"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Bachelor of Computer Applications"
                    secondary="Punjab Technical University | July 2016 - Aug 2019"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Resume Download */}
        <Grid item xs={12} sx={{ textAlign: "center", mt: 4 }}>
          <a href={resume} download style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary" sx={{ py: 1.5, px: 3 }}>
              Download Resume
            </Button>
          </a>
        </Grid>
      </Grid>
    </Container>
  );
};

// Styles
const sectionTitleStyle = {
  borderBottom: "2px solid #1976d2",
  display: "inline-block",
  pb: 1,
  fontSize: { xs: "1.5rem", md: "2rem" },
};

const cardHover = {
  transition: "0.3s",
  "&:hover": {
    transform: "scale(1.02)",
  },
};

export default Portfolio;
