variable "db_username" {
    description = "Username for this RDS instance"
    type        = string
    default     = "myadmin"
}

variable "db_password" {
    type = string
}

variable "my_ip_cidr" {
  description = "Your IP in CIDR notation"
  type        = string
}