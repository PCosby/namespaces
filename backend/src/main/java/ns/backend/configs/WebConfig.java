package ns.backend.configs;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import ns.backend.models.User;

@Configuration
public class WebConfig implements RepositoryRestConfigurer {
  private String theAllowedOrigins = "http://localhost:3000";

  @Override
  public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config,
      CorsRegistry cors) {

    config.exposeIdsFor(User.class);

    /* Configure CORS Mapping */
    cors.addMapping(config.getBasePath() + "/**")
        .allowedOrigins(theAllowedOrigins)
        .allowedMethods("GET", "POST", "PUT", "DELETE")
        .allowedHeaders("*")
        .allowCredentials(true);
  }
}
