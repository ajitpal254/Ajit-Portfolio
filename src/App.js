import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import resume from './assets/Ajit_Pal_Formatted_CV.pdf';

// Import Link for downloading the resume

const Portfolio = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        py: 4,
        backgroundColor: "#f9f9f9",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold", letterSpacing: 2, color: "#333" }}
        >
          AJIT PAL
        </Typography>
        <Typography
          variant="h5"
          component="p"
          gutterBottom
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          Full Stack Developer
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
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
        <Grid item xs={12}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ borderBottom: "2px solid #1976d2", display: "inline-block", pb: 1 }}
          >
            Summary
          </Typography>
          <Card elevation={3} sx={{ transition: "0.3s", "&:hover": { transform: "scale(1.02)" } }}>
            <CardContent>
              <Typography variant="body1" color="text.secondary">
                Highly motivated Full-Stack Developer with 3+ years of experience
                designing, developing, and implementing innovative software solutions.
                Proven ability to collaborate effectively in agile environments to deliver
                high-quality projects on time and within budget. Expertise in e-commerce
                platforms, retail applications, and financial systems.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ borderBottom: "2px solid #1976d2", display: "inline-block", pb: 1 }}
          >
            Technical Skills
          </Typography>
          <Card elevation={3} sx={{ transition: "0.3s", "&:hover": { transform: "scale(1.02)" } }}>
            <CardContent>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Expertise Area"
                    secondary="Web Applications, Java Microservices Applications, REST API Applications, Scrum/Agile Methodology"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Languages"
                    secondary="Java, JavaScript, Angular, React, HTML, CSS, Node.js"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Database"
                    secondary="MySQL, Oracle, MongoDB, Firebase, DBeaver"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Version Control/Project Management Tools"
                    secondary="GitLab, Git, Jira, Bitbucket, Jenkins"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Testing Tools/Methodology"
                    secondary="Postman, SoapUI, REST API"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Skills Attained"
                    secondary="Docker, Spring Boot, Microservices, Maven"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ borderBottom: "2px solid #1976d2", display: "inline-block", pb: 1 }}
          >
            Experience
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card elevation={3} sx={{ transition: "0.3s", "&:hover": { transform: "scale(1.02)" } }}>
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Full Stack Developer
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    Walmart (through Meson Technologies) | June 2023 - January 2025
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Led the development and implementation of key features for Walmart's e-commerce platform, resulting in a 10% increase in user engagement."
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Designed and built RESTful APIs to integrate with various internal and external systems."
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Optimized website performance, reducing page load times by 15%."
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Collaborated with cross-functional teams to gather requirements and deliver solutions."
                      />
                    </ListItem>
                  </List>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Backend Technologies Used: Node.js, NestJS, MSSQL, GraphQL, Apache Airflow
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Frontend Technologies Used: ReactJS, Next.js
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    CICD Tools Used: Docker, Kubernetes, Splunk (logging)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card elevation={3} sx={{ transition: "0.3s", "&:hover": { transform: "scale(1.02)" } }}>
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Full Stack Developer
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    Meson Technologies | August 2021 - May 2023
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Provided support and development services for various clients, including BMO, RBC, Citi Bank, and Marks."
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Automated test cases, reducing manual testing effort by 90%."
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Improved data flow in forex trade by verifying response load using proprietary API testing tools."
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ borderBottom: "2px solid #1976d2", display: "inline-block", pb: 1 }}
          >
            Projects
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Card elevation={3} sx={{ transition: "0.3s", "&:hover": { transform: "scale(1.02)" } }}>
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    To Ride: Bike Rental Application
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Developed a real-time model using Firebase and Google APIs."
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Wrote automated scripts with XPath for cross-browser compatibility."
                      />
                    </ListItem>
                  </List>
                  <Button
                    variant="outlined"
                    color="primary"
                    href="https://github.com/ajitpal254/3AmShoppeeReact"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ borderBottom: "2px solid #1976d2", display: "inline-block", pb: 1 }}
          >
            Education
          </Typography>
          <Card elevation={3} sx={{ transition: "0.3s", "&:hover": { transform: "scale(1.02)" } }}>
            <CardContent>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Mobile Application Design and Development, Post Graduate Certificate"
                    secondary="Lambton College, Toronto | January 2020 - August 2021"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Bachelor of Computer Applications"
                    secondary="Punjab Technical University, India | July 2016 - August 2019"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ borderBottom: "2px solid #1976d2", display: "inline-block", pb: 1 }}
          >
            Achievements
          </Typography>
          <Card elevation={3} sx={{ transition: "0.3s", "&:hover": { transform: "scale(1.02)" } }}>
            <CardContent>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Led initiatives during convocation week and training sessions, increasing participation by over 200 students."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Identified and reported over 100 bugs in open-source projects, contributing to code quality."
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sx={{ textAlign: "center", mt: 4 }}>
          <a href={resume} download style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary">
              Download Resume
            </Button>
          </a>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Portfolio;