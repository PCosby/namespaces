package ns.backend.controllers;

import ns.backend.interfaces.UserRepository;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

  private UserRepository userRepository;

  UserController(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

}
