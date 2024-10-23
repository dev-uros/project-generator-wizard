<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('chat', function (Blueprint $table) {
            $table->id();
            $table->foreignId('message_from_user_id')->index()->constrained('users');
            $table->foreignId('message_to_user_id')->index()->constrained('users');
            $table->text('message_content')->nullable()->default(null);
            $table->string('message_content_type')->default('text');
            $table->string('mime_main_type')->nullable()->default(null);
            $table->string('mime_sub_type')->nullable()->default(null);
            $table->text('file_url')->nullable()->default(null);
            $table->text('file_name')->nullable()->default(null);
            $table->boolean('is_message_seen')->default(false);
            $table->timestamp('message_seen_at')->nullable()->default(null);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chat');
    }
};
