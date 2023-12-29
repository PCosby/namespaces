package ns.backend.models;
import java.time.LocalDateTime;

import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.*;
import lombok.Data;
import ns.backend.models.enums.RoleValue;


@Entity
@Table(name = "roles")
@Data
public class Role {
  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne
  @JoinColumn(name = "user_id", insertable = false, updatable = false)
  private User user;
  
  @Column(name = "user_id")
  private Long userId;

  @ManyToOne
  @JoinColumn(name = "ns_id", insertable = false, updatable = false)
  private Namespace ns;
  
  @Column(name = "ns_id")
  private Long nsId;

  @Enumerated(EnumType.STRING)
  private RoleValue value;

  @UpdateTimestamp
  @Column(name = "update_dttm")
  private LocalDateTime updateDttm;


  @ManyToOne
  @JoinColumn(name = "update_user_id", insertable = false, updatable = false)
  private User updateUser;
  
  @Column(name = "update_user_id")
  private Long updateUserId;
}