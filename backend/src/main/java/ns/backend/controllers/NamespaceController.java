package ns.backend.controllers;

import ns.backend.interfaces.NamespaceRepository;
import org.springframework.web.bind.annotation.*;

@RestController
public class NamespaceController {

  private NamespaceRepository namespaceRepository;

  NamespaceController(NamespaceRepository namespaceRepository) {
    this.namespaceRepository = namespaceRepository;
  }

}
