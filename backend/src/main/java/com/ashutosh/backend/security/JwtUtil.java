package com.ashutosh.backend.security;

import java.util.Date;

import javax.crypto.SecretKey;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

public class JwtUtil {

    private static final String SECRET =
            "mysecretkeymysecretkeymysecretkey123456";

    private static final SecretKey KEY =
            Keys.hmacShaKeyFor(SECRET.getBytes());

    public static String generateToken(String email) {

        return Jwts.builder()
                .subject(email)
                .issuedAt(new Date())
                .expiration(
                        new Date(System.currentTimeMillis()
                                + 1000 * 60 * 60)
                )
                .signWith(KEY)
                .compact();
    }
    public static String extractEmail(String token) {

    Jws<Claims> claims = Jwts.parser()
            .verifyWith(KEY)
            .build()
            .parseSignedClaims(token);

    return claims.getPayload().getSubject();
}
public static boolean validateToken(String token) {

    try {

        Jwts.parser()
                .verifyWith(KEY)
                .build()
                .parseSignedClaims(token);

        return true;

    } catch (Exception e) {

        return false;
    }
}
}