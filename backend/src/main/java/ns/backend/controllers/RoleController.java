package ns.backend.controllers;

import ns.backend.interfaces.RoleRepository;
import org.springframework.web.bind.annotation.*;

@RestController
public class RoleController {

  private RoleRepository roleRepository;

  RoleController(RoleRepository roleRepository) {
    this.roleRepository = roleRepository;
  }

}
