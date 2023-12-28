package ns.backend.models;
import java.time.LocalDateTime;

import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "servers")
@Data
public class Server {
  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String name;
  private String description;

  @UpdateTimestamp
  @Column(name = "update_dttm")
  private LocalDateTime updateDttm;

  @ManyToOne
  @JoinColumn(name = "update_user_id", insertable = false, updatable = false)
  private User updateUser;

  @Column(name = "update_user_id")
  private Long updateUserId;
}