package com.example.demo.Security;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);

}