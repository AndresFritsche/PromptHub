using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PromptHub.Migrations
{
    /// <inheritdoc />
    public partial class AddCategory : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Tag",
                table: "Prompts",
                newName: "Category");

            migrationBuilder.AddColumn<int>(
                name: "CategoryId",
                table: "Prompts",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Prompts_CategoryId",
                table: "Prompts",
                column: "CategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Prompts_Categories_CategoryId",
                table: "Prompts",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Prompts_Categories_CategoryId",
                table: "Prompts");

            migrationBuilder.DropTable(
                name: "Categories");

            migrationBuilder.DropIndex(
                name: "IX_Prompts_CategoryId",
                table: "Prompts");

            migrationBuilder.DropColumn(
                name: "CategoryId",
                table: "Prompts");

            migrationBuilder.RenameColumn(
                name: "Category",
                table: "Prompts",
                newName: "Tag");
        }
    }
}
