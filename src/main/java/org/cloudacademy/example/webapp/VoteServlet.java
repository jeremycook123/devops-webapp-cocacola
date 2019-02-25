package org.cloudacademy.example.webapp;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

@WebServlet(name = "VoteServlet", urlPatterns = { "/vote1", "/vote2", "/vote3" }, loadOnStartup = 1)
public class VoteServlet extends HttpServlet {
    private static Logger logger = LogManager.getLogger(VoteServlet.class);

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String path = request.getServletPath() != null ? request.getServletPath() : "";
        switch (path) {
        case "/vote1":
            logger.debug("action 1 called...");
            response.getWriter().println("vote->1");
            break;
        case "/vote2":
            logger.debug("action 2 called...");
            response.getWriter().println("vote->2");
            break;
        case "/vote3":
            logger.debug("action 3 called...");
            response.getWriter().println("vote->3");
            break;
        }
    }
}