package ns.backend.interfaces;

import ns.backend.models.Server;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestParam;

public interface ServerRepository extends JpaRepository<Server, Long> {

  
}
