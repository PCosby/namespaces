package ns.backend.interfaces;

import ns.backend.models.Namespace;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestParam;

public interface NamespaceRepository extends JpaRepository<Namespace, Long> {

  
}
