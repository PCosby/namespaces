package ns.backend.controllers;

import ns.backend.models.User;
import ns.backend.interfaces.UserRepository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class UserController {

  private UserRepository userRepository;

  UserController(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

}
