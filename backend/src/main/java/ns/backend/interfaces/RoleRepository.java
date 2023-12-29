package ns.backend.interfaces;

import ns.backend.models.Role;
import ns.backend.models.enums.RoleValue;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestParam;

public interface RoleRepository extends JpaRepository<Role, Long> {

    Page<Role> findByUserIdAndValueNot(@RequestParam("userId") Long userId, @RequestParam("value") RoleValue value, Pageable pageable);
  
}
