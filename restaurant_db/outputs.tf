output "rds_endpoint" {
    value = aws_db_instance.basic_postgres.endpoint
}