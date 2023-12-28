package ns.backend.controllers;

import ns.backend.interfaces.ServerRepository;
import org.springframework.web.bind.annotation.*;

@RestController
public class ServerController {

  private ServerRepository serverRepository;

  ServerController(ServerRepository serverRepository) {
    this.serverRepository = serverRepository;
  }

}
