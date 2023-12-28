package ns.backend.models;
import java.time.LocalDateTime;

import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "namespaces")
@Data
public class Namespace {
  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String name;

  @Column(name = "description")
  private String desc;

  @ManyToOne
  @JoinColumn(name = "server_id", insertable = false, updatable = false)
  private Server server;

  @Column(name = "server_id")
  private Long serverId;

  @UpdateTimestamp
  @Column(name = "update_dttm")
  private LocalDateTime updateDttm;

  @ManyToOne
  @JoinColumn(name = "update_user_id", insertable = false, updatable = false)
  private User updateUser;
  
  @Column(name = "update_user_id")
  private Long updateUserId;

}
