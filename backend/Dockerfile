# Giai đoạn 1: Build ứng dụng với JDK 23
FROM eclipse-temurin:23-jdk-alpine AS build
WORKDIR /app
COPY . .
RUN chmod +x mvnw
RUN ./mvnw clean package -DskipTests

# Giai đoạn 2: Chạy ứng dụng với JRE 23 tối ưu dung lượng
FROM eclipse-temurin:23-jre-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar

# Render tự động gán biến PORT, Spring Boot sẽ đọc biến này
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]